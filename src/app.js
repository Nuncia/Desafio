require('./database/connection');

const express = require('express');
const routes = require('./routes/index');
const cors = require('cors');

const app = express();

//middlewares
app.use(express.json());
app.use(cors());

//errores
app.use((error, req, res, next) => {
   console.log(error);
   res.status(500).send('Error en el sevidor.');
});

//routes
app.use('/', routes);

module.exports = app;
