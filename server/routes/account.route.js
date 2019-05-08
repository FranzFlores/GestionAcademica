'use strict'

var express = require('express');
var router = express.Router();

var accountController = require('../controllers/account.controller');

router.get('/test',accountController.test);

router.put('/update/:id',accountController.update_password);

module.exports = router;
