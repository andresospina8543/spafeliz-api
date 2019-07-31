const Sequelize = require('sequelize');
const conn = require('../database/connection.js');

module.exports = conn.define('reserva', {
    id:{type:Sequelize.SMALLINT, primaryKey: true},
    idService:Sequelize.SMALLINT,
    nombrePersona:Sequelize.STRING,
    email:Sequelize.STRING,
    fecha:Sequelize.STRING,
    hora:Sequelize.STRING
},  { 
    timestamps: false
})