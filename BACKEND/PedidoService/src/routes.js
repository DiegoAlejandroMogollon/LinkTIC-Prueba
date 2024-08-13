const express = require('express');
const pool = require('./db');
const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Pedidos
 *   description: Operaciones relacionadas con pedidos
 */

/**
 * @swagger
 * /crearPedido:
 *   post:
 *     summary: Crea un nuevo pedido con detalles
 *     tags: [Pedidos]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               cliente_id:
 *                 type: integer
 *                 description: ID del cliente que realiza el pedido
 *               total:
 *                 type: number
 *                 format: float
 *                 description: Total del pedido
 *               estado_pedido_id:
 *                 type: integer
 *                 description: ID del estado del pedido
 *               detalles:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     producto_id:
 *                       type: integer
 *                       description: ID del producto
 *                     cantidad:
 *                       type: integer
 *                       description: Cantidad del producto
 *     responses:
 *       201:
 *         description: Pedido y detalles creados exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 pedido_id:
 *                   type: integer
 *                 cliente_id:
 *                   type: integer
 *                 fecha_pedido:
 *                   type: string
 *                   format: date-time
 *                 total:
 *                   type: number
 *                   format: float
 *                 estado_pedido_id:
 *                   type: integer
 *                 detalles:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       detalle_pedido_id:
 *                         type: integer
 *                       producto_id:
 *                         type: integer
 *                       cantidad:
 *                         type: integer
 *       500:
 *         description: Error interno del servidor
 */
router.post('/crearPedido', async (req, res) => {
    const { cliente_id, total, estado_pedido_id, detalles } = req.body;

    try {

        await pool.query('BEGIN');


        const pedidoResult = await pool.query(
            'INSERT INTO pedido (cliente_id, total, estado_pedido_id) VALUES ($1, $2, $3) RETURNING *',
            [cliente_id, total, estado_pedido_id]
        );

        const pedido_id = pedidoResult.rows[0].pedido_id;


        const detallesPromises = detalles.map(detalle => {
            const { producto_id, cantidad } = detalle;
            return pool.query(
                'INSERT INTO detalle_pedido (pedido_id, producto_id, cantidad) VALUES ($1, $2, $3) RETURNING *',
                [pedido_id, producto_id, cantidad]
            );
        });

        const detallesResults = await Promise.all(detallesPromises);


        await pool.query('COMMIT');

        res.status(201).json({
            ...pedidoResult.rows[0],
            detalles: detallesResults.map(result => result.rows[0]),
        });
    } catch (error) {

        await pool.query('ROLLBACK');
        res.status(500).json({ error: error.message });
    }
});


/**
 * @swagger
 * /modificarPedido/{id}:
 *   put:
 *     summary: Modifica un pedido existente
 *     tags: [Pedidos]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID del pedido a modificar
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               cliente_id:
 *                 type: integer
 *                 description: ID del cliente que realiza el pedido
 *               total:
 *                 type: number
 *                 format: float
 *                 description: Total del pedido
 *               estado_pedido_id:
 *                 type: integer
 *                 description: ID del estado del pedido
 *     responses:
 *       200:
 *         description: Pedido modificado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 pedido_id:
 *                   type: integer
 *                 cliente_id:
 *                   type: integer
 *                 fecha_pedido:
 *                   type: string
 *                   format: date-time
 *                 total:
 *                   type: number
 *                   format: float
 *                 estado_pedido_id:
 *                   type: integer
 *       404:
 *         description: Pedido no encontrado
 *       500:
 *         description: Error interno del servidor
 */
router.put('/modificarPedido/:id', async (req, res) => {
    const { id } = req.params;
    const { cliente_id, total, estado_pedido_id } = req.body;
    try {
        const result = await pool.query(
            'UPDATE pedido SET cliente_id = $1, total = $2, estado_pedido_id = $3 WHERE pedido_id = $4 RETURNING *',
            [cliente_id, total, estado_pedido_id, id]
        );
        if (result.rows.length > 0) {
            res.json(result.rows[0]);
        } else {
            res.status(404).json({ message: 'Pedido no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

/**
 * @swagger
 * /api/pedido/listarPedido:
 *   get:
 *     summary: Lista todos los pedidos con sus detalles
 *     tags: [Pedidos]
 *     responses:
 *       200:
 *         description: Lista de pedidos con detalles asociados
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   pedido_id:
 *                     type: integer
 *                     description: ID del pedido
 *                   cliente_id:
 *                     type: integer
 *                     description: ID del cliente que realizó el pedido
 *                   fecha_pedido:
 *                     type: string
 *                     format: date-time
 *                     description: Fecha y hora en que se realizó el pedido
 *                   total:
 *                     type: number
 *                     format: float
 *                     description: Total del pedido
 *                   estado_pedido_id:
 *                     type: integer
 *                     description: ID del estado del pedido
 *                   detalles:
 *                     type: array
 *                     description: Detalles de los productos en el pedido
 *                     items:
 *                       type: object
 *                       properties:
 *                         detalle_pedido_id:
 *                           type: integer
 *                           description: ID del detalle del pedido
 *                         producto_id:
 *                           type: integer
 *                           description: ID del producto en el detalle
 *                         cantidad:
 *                           type: integer
 *                           description: Cantidad del producto en el detalle
 *       500:
 *         description: Error interno del servidor
 */

router.get('/listarPedido', async (req, res) => {
    try {
        const query = `
            SELECT 
                p.pedido_id,
                p.cliente_id,
                p.fecha_pedido,
                p.total,
                p.estado_pedido_id,
                d.detalle_pedido_id,
                d.producto_id,
                d.cantidad
            FROM 
                pedido p
            LEFT JOIN 
                detalle_pedido d 
            ON 
                p.pedido_id = d.pedido_id
        `;
        const result = await pool.query(query);


        const pedidos = {};
        result.rows.forEach(row => {
            if (!pedidos[row.pedido_id]) {
                pedidos[row.pedido_id] = {
                    pedido_id: row.pedido_id,
                    cliente_id: row.cliente_id,
                    fecha_pedido: row.fecha_pedido,
                    total: row.total,
                    estado_pedido_id: row.estado_pedido_id,
                    detalles: []
                };
            }
            if (row.detalle_pedido_id) {
                pedidos[row.pedido_id].detalles.push({
                    detalle_pedido_id: row.detalle_pedido_id,
                    producto_id: row.producto_id,
                    cantidad: row.cantidad
                });
            }
        });

        res.json(Object.values(pedidos));
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});


/**
 * @swagger
 * /obtenerPedido/{id}:
 *   get:
 *     summary: Obtiene un pedido específico
 *     tags: [Pedidos]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID del pedido a obtener
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Pedido encontrado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 pedido_id:
 *                   type: integer
 *                 cliente_id:
 *                   type: integer
 *                 fecha_pedido:
 *                   type: string
 *                   format: date-time
 *                 total:
 *                   type: number
 *                   format: float
 *                 estado_pedido_id:
 *                   type: integer
 *       404:
 *         description: Pedido no encontrado
 *       500:
 *         description: Error interno del servidor
 */
router.get('/obtenerPedido/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const result = await pool.query('SELECT * FROM pedido WHERE pedido_id = $1', [id]);
        if (result.rows.length > 0) {
            res.json(result.rows[0]);
        } else {
            res.status(404).json({ message: 'Pedido no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

/**
 * @swagger
 * /eliminarPedido/{id}:
 *   delete:
 *     summary: Elimina un pedido
 *     tags: [Pedidos]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID del pedido a eliminar
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Pedido eliminado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 pedido_id:
 *                   type: integer
 *                 cliente_id:
 *                   type: integer
 *                 fecha_pedido:
 *                   type: string
 *                   format: date-time
 *                 total:
 *                   type: number
 *                   format: float
 *                 estado_pedido_id:
 *                   type: integer
 *       404:
 *         description: Pedido no encontrado
 *       500:
 *         description: Error interno del servidor
 */
router.delete('/eliminarPedido/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const result = await pool.query('DELETE FROM pedido WHERE pedido_id = $1 RETURNING *', [id]);
        if (result.rows.length > 0) {
            res.json(result.rows[0]);
        } else {
            res.status(404).json({ message: 'Pedido no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
