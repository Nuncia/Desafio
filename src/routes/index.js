const { obtenerInventario } = require('../controllers');

const { Router } = require('express');
const router = Router();

//path,middleware,controller
router.get('/inventario/filtros', obtenerInventario);

module.exports = router;
