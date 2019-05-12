const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const passport = require('passport');
const session = require('express-session');

const account = require('./models/account.model');
const person = require('./models/person.model');
const student = require('./models/student.model');
const teacher = require('./models/teacher.model');

//Inicializaciones
const app = express();
require('./config/passport')(passport,account,person,student,teacher);
const { mongoose } = require('./database');

// Settings
app.set('port', process.env.PORT || 3000);

// Middlewares
app.use(morgan('dev'));
app.use(cors({origin: 'http://localhost:4200'}));
app.use(express.json());
app.use(session({
    secret: 'mysecretsession',
    resave: false,
    saveUninitialized: false
  }));
  app.use(passport.initialize());
  app.use(passport.session());

// Routes
app.use('/api/person', require('./routes/person.route'));
app.use('/api/account', require('./routes/account.route'));


// starting the server
app.listen(app.get('port'), () => {
    console.log(`server on port ${app.get('port')}`);
});

module.exports = app;