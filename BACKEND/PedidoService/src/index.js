const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes'); 
const { swaggerDocs, swaggerUiSetup } = require('./swagger'); 
const app = express();
const port = 3000;

app.use(bodyParser.json());

app.use('/api/pedido', routes);

app.use('/api-docs', swaggerDocs, swaggerUiSetup);

app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});
