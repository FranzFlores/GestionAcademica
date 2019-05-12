'use strict'

var express = require('express');
var router = express.Router();
const passport = require('passport');

var personController = require('../controllers/person.controller');

router.get('/test',personController.test);

router.post('/create',personController.create_person);
// router.post('/create', passport.authenticate('local-signup', {
//     successRedirect: '/',
//     failureRedirect: '/'
//   }));

router.get('/allStudents',personController.all_students);
router.get('/allTeachers',personController.all_teachers);

router.put('/update/:id',personController.update_person);
router.put('/delete/:id',personController.delete_person);

module.exports = router;
