var bookModel = require('../models/bookModel')

exports.reserva_registro = function(req, res){

    bookModel.create({
        id:1,
        idService:1,
        nombrePersona:'Andres',
        email:'david@gmail.com',
        fecha:'30/07/2019',
        hora:'08:35'
    })
    .then(data => {
        res.send('Exito:' + data);
    })
    .catch(err => {
        res.status(500).send(err);
    })
}