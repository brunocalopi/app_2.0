//Lugar de configuración de nuestro servidor...

//importamos express

const express = require('express');
const routes = require('../routs/routs');
//Express: Es una clase configurable como servidor http o https que se vincula a un requerimiento
//Nota: Se necesita crear una instancia

const server_app = express(); // Inicializando la instancia del servidor.

server_app.set('port',process.env.Port||4000)// Verifica un puerto libre o elige el puerto 4000.

server_app.listen(server_app.get('port'),()=>{
  console.log('server on port', server_app.get('port'))
})

server_app.use(routes.inicio);

