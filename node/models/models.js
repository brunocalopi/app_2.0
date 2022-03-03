//Tenemos que definir 1 modelo porque solo hay una entidad.

//Se tiene que definir tantos modelos como entidades existan + sus relaciones n a n. (En algunos casos).


const {Sequelize, DataTypes} = require ('sequelize');
const {database} = require('../database/db');

console.log(database);

