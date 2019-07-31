var bookModel = require('../models/bookModel')

exports.reserva_registro = function(req, res){
    console.log('init reserva_registro' + JSON.stringify(req.body));
    bookModel.create(req.body)
    .then(data => {
        res.send('Exito:' + data);
    })
    .catch(err => {
        res.status(500).send(err);
    })
}