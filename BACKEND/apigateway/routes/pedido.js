/**
 * @swagger
 * /api/pedido/crearPedido:
 *   post:
 *     summary: Crea un nuevo pedido con detalles a través del API Gateway
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
/**
 * @swagger
 * /api/pedido/modificarPedido/{id}:
 *   put:
 *     summary: Modifica un pedido existente a través del API Gateway
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

/**
 * @swagger
 * /api/pedido/obtenerPedido/{id}:
 *   get:
 *     summary: Obtiene un pedido específico a través del API Gateway
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
/**
 * @swagger
 * /api/pedido/eliminarPedido/{id}:
 *   delete:
 *     summary: Elimina un pedido a través del API Gateway
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

