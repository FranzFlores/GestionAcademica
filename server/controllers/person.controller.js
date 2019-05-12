'use strict'
var mongoose = require('mongoose');
mongoose.set('useFindAndModify', false);
var helpers = require('../lib/helpers');
var ObjectId = require('mongoose').Types.ObjectId; 

var Person = require('../models/person.model');
var Account = require('../models/account.model');
var Student = require('../models/student.model');
var Teacher = require('../models/teacher.model');

const PersonController = {};

PersonController.test = (req, res) => {
    res.send('ok');
};

PersonController.create_person = (req, res) => {
    Person.findOne({ dni_person: req.body.dni }, (err, personResult) => {
        if (err) res.status(500).send('Error');
        else if (personResult) res.status(200).send('Login');
        else {
            new Person({
                dni_person: req.body.dni,
                name: req.body.name,
                gender: req.body.gender,
                birthday: req.body.birthday,
                institutional_mail: req.body.institutional_mail,
                personal_mail: req.body.personal_mail,
                address: req.body.address,
                phone: req.body.phone,
                image: "null"
            }).save((err, newPerson) => {
                if (err) res.status(500).send('Error Al Crear Persona');
                else if (newPerson) {
                    new Account({
                        user: req.body.institutional_mail,
                        password: helpers.generateHash(newPerson.dni_person),
                        person: newPerson._id
                    }).save((err, newAccount) => {
                        if (err) res.status(500).send('Error al crear cuenta');
                        else if (newAccount) {
                            if (req.body.role === 'student') {
                                new Student({
                                    school: req.body.school,
                                    graduation_grade: req.body.graduation_grade,
                                    person: newPerson._id
                                }).save((err, newStudent) => {
                                    if (err) res.status(500).send('Error al crear estudiante');
                                    else if (newStudent) {
                                        res.status(200).send({
                                            'person': newPerson,
                                            'account': newAccount,
                                            'student': newStudent
                                        });
                                    } else res.status(404).send('No se pudo crear el usuario');
                                })
                            } else if (req.body.role == 'teacher') {
                                new Teacher({
                                    university_degree: req.body.university_degree,
                                    fourth_level_degree: req.body.fourth_level_degree,
                                    timetable: req.body.timetable,
                                    person: newPerson._id
                                }).save((err, newTeacher) => {
                                    if (err) res.status(500).send('Error al crear maestro');
                                    else if (newTeacher) {
                                        res.status(200).send({
                                            'person': newPerson,
                                            'account': newAccount,
                                            'teacher': newTeacher
                                        });
                                    } else res.status(404).send('No se pudo crear el usuario');
                                })
                            }
                        } else res.status(404).send('No se pudo crear el usuario');
                    })
                } else res.status(404).send('No se pudo crear el usuario');
            })
        }
    })
};


PersonController.all_students = (req, res) => {
    var students = Student.find({status:true});
    students.populate({ path: 'person' }).exec((err, students) => {
        if (err) res.status(500).send("Error en el servidor");
        else {
            if (!students) res.status(404).send("No existen estudiantes");
            else res.status(200).send(students);
        }
    });
}

PersonController.all_teachers = (req, res) => {
    var teachers = Teacher.find({status:true});
    teachers.populate({ path: 'person' }).exec((err, teachers) => {
        if (err) res.status(500).send("Error en el servidor");
        else {
            if (!teachers) res.status(404).send("No existen estudiantes");
            else res.status(200).send(teachers);
        }
    });
}


PersonController.update_person = (req, res) => {

    var personUpdate = {
        dni_person: req.body.dni,
        name: req.body.name,
        gender: req.body.gender,
        birthday: req.body.birthday,
        institutional_mail: req.body.institutional_mail,
        personal_mail: req.body.personal_mail,
        address: req.body.address,
        phone: req.body.phone
    }

    Person.findByIdAndUpdate(req.params.id, personUpdate, (err, person) => {
        if (err) res.status(500).send("Error en el servidor");
        else {
            if (!person) res.status(404).send("No se actualizado la persona");
            else {
                if (req.body.role === 'student') {
                    personUpdate.school = req.body.school,
                    personUpdate.graduation_grade = req.body.graduation_grade

                    Student.findOneAndUpdate({ person: new ObjectId(req.params.id) }, personUpdate, (err, student) => {
                        if (err) res.status(500).send('Error');
                        else {
                            if (!student) res.status(404).send('No se pudo actualizar');
                            else res.status(200).send('Actualizado Exitosamente');
                        }
                    });
                } else if (req.body.role === 'teacher') {
                    personUpdate.university_degree = req.body.university_degree,
                        personUpdate.fourth_level_degree = req.body.fourth_level_degree,
                        personUpdate.timetable = req.body.timetable

                    Teacher.findOneAndUpdate({ person: new ObjectId(req.params.id) }, personUpdate, (err, teacher) => {
                        if (err) res.status(500).send('Error');
                        else {
                            if (!teacher) res.status(404).send('No se pudo actualizar');
                            else res.status(200).send('Actualizado Exitosamente');
                        }
                    });
                }
            }
        }
    });
};

PersonController.delete_person = (req,res)=>{
    Person.findByIdAndUpdate(req.params.id,{status:false},(err,result)=>{
        if(err) res.status(500).send('Error');
        else{
            if(!result) res.status(404).send('No se pudo eliminar la persona');
            else{
                if(req.body.role == 'student'){
                    Student.findOneAndUpdate({ person: new ObjectId(req.params.id) },{status:false},(err,result)=>{
                        if (err) res.status(500).send('Error');
                        else {
                            if (!result) res.status(404).send('No se pudo eliminar el estudiante');
                            else res.status(200).send('Eliminado Exitosamente');
                        }
                    });
                }else if(req.body.role == 'teacher'){
                    Teacher.findOneAndUpdate({ person: new ObjectId(req.params.id) },{status:false},(err,result)=>{
                        if (err) res.status(500).send('Error');
                        else {
                            if (!result) res.status(404).send('No se pudo eliminar el docente');
                            else res.status(200).send('Eliminado Exitosamente');
                        }
                    });
                }
            }
        }
    })
};



module.exports = PersonController;