const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
   user: 'postgres',
   host: 'localhost',
   database: 'joyas',
   paassword: '',
   port: 5433,
   allowExitOnIdle: true,
});

const getInventario = async () => {
   const consulta = 'select * from inventario';
   const { rows: joyas } = await pool.query(consulta);
   console.log(joyas);
};

// getInventario();

module.exports = pool;
