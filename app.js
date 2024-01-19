// app.js
const bicicletasAPIRouter = require('./routes/api/bicicleta.js');
const express = require('express');

let app = express();

app.use('/api/bicicleta', bicicletasAPIRouter);
app.use('/api/bicicleta/create', bicicletasAPIRouter);

module.exports = app;  // Asegúrate de exportar la aplicación
