const erroresBaseDatos = {
   '22P02': {
      code: 400,
      msg: 'Valores de parametros invalidos',
   },
   23502: {
      code: 400,
      msg: 'Solicitud incorrecta',
   },
};

const getDatabaseError = (code) => {
   return (
      erroresBaseDatos[code] || { code: 500, msg: 'Error interno del servidor' }
   );
};
