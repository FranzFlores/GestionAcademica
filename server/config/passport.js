'use strict'
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;


module.exports = function (passport, person, account, student, teacher) {
  const LocalStrategy = require('passport-local').Strategy;
  const Person = person;
  const Account = account;
  const Student = student;
  const Teacher = teacher;

  passport.serializeUser((account, done) => {
    done(null, account);
  });

  passport.deserializeUser((account, done) => {
    done(null, account);
  });

  //Registro de Estudiante o Docente
  passport.use('local-signup', new LocalStrategy({
    usernameField: 'user',
    passwordField: 'password',
    passReqToCallback: true
  }, function (req, user, password, done) {

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
              id_account: new mongoose.Types.ObjectId(),
              user: req.body.institutional_mail,
              password: helpers.generateHash(newPerson.dni_person),
              person: newPerson.id_person
            }).save((err, newAccount) => {
              if (err) res.status(500).send('Error al crear cuenta');
              else if (newAccount) {
                if (req.body.role === 'student') {
                  new Student({
                    id_student: new mongoose.Types.ObjectId(),
                    school: req.body.school,
                    graduation_grade: req.body.graduation_grade,
                    person: newPerson.id_person
                  }).save((err, newStudent) => {
                    if (err) res.status(500).send('Error al crear estudiante');
                    else if (newStudent) {
                      done(null, newStudent);
                      // res.status(200).send({
                      //   'person': newPerson,
                      //   'account': newAccount,
                      //   'student': newStudent
                      // });
                    } else res.status(404).send('No se pudo crear el usuario');
                  })
                } else if (req.body.role == 'teacher') {
                  new Teacher({
                    id_teacher: new mongoose.Types.ObjectId(),
                    university_degree: req.body.university_degree,
                    fourth_level_degree: req.body.fourth_level_degree,
                    timetable: req.body.timetable,
                    person: newPerson.id_person
                  }).save((err, newTeacher) => {
                    if (err) res.status(500).send('Error al crear maestro');
                    else if (newTeacher) {
                      done(null, newTeacher);
                      // res.status(200).send({
                      //   'person': newPerson,
                      //   'account': newAccount,
                      //   'teacher': newTeacher
                      // });
                    } else res.status(404).send('No se pudo crear el usuario');
                  })
                }
              } else res.status(404).send('No se pudo crear el usuario');
            })
          } else res.status(404).send('No se pudo crear el usuario');
        })
      }
    })
  }
  ));



  let opts = {};
  opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
  opts.secretOrKey = 'gestionAcademica';
  passport.use(new JwtStrategy(opts, (jwt_payload, done) => {
    Account.findById(jwt_payload.data._id, (err, account) => {
      if (err) {
        return done(err, false);
      }
      if (account) {
        return done(null, user);
      } else {
        return done(null, false);
      }
    });
  }));
}