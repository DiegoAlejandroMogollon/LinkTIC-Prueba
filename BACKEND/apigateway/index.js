const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const swaggerJsDoc = require('swagger-jsdoc');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');

require('dotenv').config();

const app = express();

app.use(cors({
    origin: 'http://localhost:4200', 
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  }));

const swaggerOptions = {
    swaggerDefinition: {
        openapi: '3.0.0',
        info: {
            title: 'API Gateway',
            version: '1.0.0',
            description: 'API Gateway para manejar rutas hacia autenticación, pedidos y productos',
            contact: {
                name: 'Diego Mogollón',
                email: 'dookeep77@gmail.com',
            },
        },
        servers: [
            {
                url: `http://localhost:${process.env.PORT || 4000}`,
            },
        ],
    },
    apis: ['./routes/*.js'], 
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

const authServiceProxy = createProxyMiddleware({
    target: process.env.AUTENTICACION_SERVICE_URL,
    changeOrigin: true,
    pathRewrite: { '^/api/autenticacion': '' },
});

const pedidoServiceProxy = createProxyMiddleware({
    target: process.env.PEDIDO_SERVICE_URL,
    changeOrigin: true,
    pathRewrite: { '^/api/pedido': '' },
});

const productoServiceProxy = createProxyMiddleware({
    target: process.env.PRODUCTO_SERVICE_URL,
    changeOrigin: true,
    pathRewrite: { '^/api/producto': '' },
});

app.use('/api/autenticacion', authServiceProxy);
app.use('/api/pedido', pedidoServiceProxy);
app.use('/api/producto', productoServiceProxy);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`API Gateway corriendo en el puerto ${PORT}`);
    console.log(`Swagger UI disponible en http://localhost:${PORT}/api-docs`);
});
