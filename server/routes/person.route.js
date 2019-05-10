'use strict'

var express = require('express');
var router = express.Router();
const passport = require('passport');

var personController = require('../controllers/person.controller');

router.get('/test',personController.test);

// router.post('/create',personController.create_person);
router.post('/create', passport.authenticate('local-signup', {
    successRedirect: '/',
    failureRedirect: '/'
  }));
module.exports = router;
