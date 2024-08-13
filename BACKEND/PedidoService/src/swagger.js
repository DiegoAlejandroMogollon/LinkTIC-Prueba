
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');


const swaggerSpec = swaggerJsdoc({
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'PedidoService API',
      version: '1.0.0',
      description: 'API para gestionar pedidos',
    },
    servers: [
      {
        url: 'http://localhost:3000/api/pedido',
        description: 'Servidor de desarrollo',
      },
    ],
  },
  apis: ['./src/routes.js'],
});

// Middleware para Swagger UI
const swaggerDocs = swaggerUi.serve;
const swaggerUiSetup = swaggerUi.setup(swaggerSpec);

module.exports = { swaggerDocs, swaggerUiSetup };
