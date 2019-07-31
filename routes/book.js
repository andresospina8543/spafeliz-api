//archivo nuevo
var express = require('express');
var router = express.Router();

var book_controller = require('../controllers/bookController')

/* POST services listing. */
router.post('/registrar', book_controller.reserva_registro);

module.exports = router;
