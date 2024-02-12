const pool = require('../database/connection');
const { selectInventario } = require('../querys/index');

const obtenerInventario = async (req, res, next) => {
   const { precio_max, precio_min, categoria, metal } = req.query;
   // console.log(precio_max, precio_min, categoria, metal);
   try {
      let filtros = [];
      const values = [];

      const agregarFiltros = (campo, comparador, valor) => {
         // console.log('agregarFiltro: ', campo, comparador, valor);
         values.push(valor);
         let { length } = filtros;
         filtros.push(`${campo} ${comparador} %`);
         // console.log(filtros);
      };

      if (precio_max) agregarFiltros('precio', '<=', precio_max);
      if (precio_min) agregarFiltros('precio', '>=', precio_min);
      if (categoria) agregarFiltros('categoria', '=', categoria);
      if (metal) agregarFiltros('metal', '=', metal);

      let consulta =
         'SELECT id, nombre, categoria, metal, precio, stock FROM inventario';

      if (filtros.length > 0) {
         filtros = filtros.join(` AND `);
         consulta += ` WHERE ${filtros}`;
      }
      console.log(filtros);
      const { rows } = await pool.query(consulta, values);
      console.log('rows: ', rows);
      return res.json(rows);
   } catch (error) {
      console.log(error);
      next(error);
   }
};

module.exports = { obtenerInventario };
