/**
 * @swagger
 * tags:
 *   name: Producto
 *   description: Endpoints para la gestión de productos
 */

/**
 * @swagger
 * /api/producto/agregarProducto:
 *   post:
 *     summary: Agregar un nuevo producto
 *     tags: [Producto]
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             required:
 *               - nombre
 *               - descripcion
 *               - precio
 *               - stock
 *               - categoriaId
 *               - UsuarioId
 *             properties:
 *               nombre:
 *                 type: string
 *                 description: Nombre del producto
 *               descripcion:
 *                 type: string
 *                 description: Descripción del producto
 *               precio:
 *                 type: number
 *                 format: decimal
 *                 description: Precio del producto
 *               stock:
 *                 type: integer
 *                 description: Cantidad en stock del producto
 *               categoriaId:
 *                 type: integer
 *                 description: ID de la categoría del producto
 *               UsuarioId:
 *                 type: integer
 *                 description: ID del usuario que crea el producto
 *               file:
 *                 type: string
 *                 format: binary
 *                 description: Imagen del producto
 *     responses:
 *       201:
 *         description: Producto creado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Producto'
 */

/**
 * @swagger
 * /api/producto/obtenerProducto/{id}:
 *   get:
 *     summary: Obtener un producto por ID
 *     tags: [Producto]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID del producto
 *     responses:
 *       200:
 *         description: Producto obtenido exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Producto'
 *       404:
 *         description: Producto no encontrado
 */

/**
 * @swagger
 * /api/producto/obtenerProductos:
 *   get:
 *     summary: Obtener todos los productos
 *     tags: [Producto]
 *     responses:
 *       200:
 *         description: Lista de productos obtenida exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Producto'
 */

/**
 * @swagger
 * /api/producto/modificarProducto/{id}:
 *   put:
 *     summary: Modificar un producto existente
 *     tags: [Producto]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID del producto
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ActualizarProductoDto'
 *     responses:
 *       204:
 *         description: Producto modificado exitosamente
 *       404:
 *         description: Producto no encontrado
 */

/**
 * @swagger
 * /api/producto/eliminarProducto/{id}:
 *   delete:
 *     summary: Eliminar un producto
 *     tags: [Producto]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID del producto
 *     responses:
 *       204:
 *         description: Producto eliminado exitosamente
 *       404:
 *         description: Producto no encontrado
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Producto:
 *       type: object
 *       properties:
 *         ProductoId:
 *           type: integer
 *         Nombre:
 *           type: string
 *         Descripcion:
 *           type: string
 *         Precio:
 *           type: number
 *           format: decimal
 *         Stock:
 *           type: integer
 *         CategoriaId:
 *           type: integer
 *         UsuarioId:
 *           type: integer
 *         RutaImagen:
 *           type: string
 *         FechaCreacion:
 *           type: string
 *           format: date-time
 *     ActualizarProductoDto:
 *       type: object
 *       properties:
 *         Nombre:
 *           type: string
 *         Descripcion:
 *           type: string
 *         Precio:
 *           type: number
 *           format: decimal
 *         Stock:
 *           type: integer
 *         CategoriaId:
 *           type: integer
 *         File:
 *           type: string
 *           format: binary
 */

