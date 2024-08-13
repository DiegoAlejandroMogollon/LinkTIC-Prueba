/**
 * @swagger
 * tags:
 *   name: Autenticación
 *   description: Endpoints para el manejo de autenticación de usuarios
 */

/**
 * @swagger
 * /api/autenticacion/Usuarios/login:
 *   post:
 *     summary: Iniciar sesión
 *     tags: [Autenticación]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - contraseña
 *             properties:
 *               email:
 *                 type: string
 *                 description: El email del usuario
 *               contraseña:
 *                 type: string
 *                 description: La contraseña del usuario
 *     responses:
 *       200:
 *         description: Login exitoso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 mensaje:
 *                   type: string
 *                 usuario:
 *                   type: string
 *                 tipoUsuario:
 *                   type: string
 *       401:
 *         description: Credenciales inválidas
 *         content:
 *           application/json:
 *             schema:
 *               type: string
 *               example: Credenciales inválidas
 */
