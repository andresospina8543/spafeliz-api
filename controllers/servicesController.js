var serviceModel = require('../models/serviceModel')

exports.services_all_get = function ( req, res){
    //res.send('devolver todos los servicios del spa');
    serviceModel.findAll({
        attributes:['id','name', 'image','happy']
    })
    .then(data =>{
        res.json(data);
    })
    .catch(err => {
        res.status(500).send(err);
    })
}

exports.services_detail = function ( req, res){
    //res.send('devolver el servicio con identificador ' + req.params.id);
    serviceModel.findByPk(req.params.id,{
        attributes:['id','name', 'image','happy']
    })
    .then(data =>{
        res.json(data);
    })
    .catch(err => {
        res.status(500).send(err);
    })
}