//archivo nuevo
var express = require('express');
var router = express.Router();

var services_controller = require('../controllers/servicesController')
var book_controller = require('../controllers/bookController')

/* GET services listing. */
router.get('/', services_controller.services_all_get);

router.get('/:id', services_controller.services_detail);

router.post('/book', book_controller.reserva_registro);

module.exports = router;
