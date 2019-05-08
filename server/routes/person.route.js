'use strict'

var express = require('express');
var router = express.Router();

var personController = require('../controllers/person.controller');

router.get('/test',personController.test);

router.post('/create',personController.create_person);

module.exports = router;
