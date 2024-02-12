const cors = require('cors');
require('dotenv').config();
const express = require('express');
const router = require('./src/routes/index');

const app = express();

// Middlewares
app.use(express.json());
app.use(cors());
app.use('/', router);

const PORT = process.env.PORT || 3003;
// console.log(PORT);

app.listen(PORT, () => {
   console.info(`Servidor corriendo en puerto: ${PORT}`);
});
