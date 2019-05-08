const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const app = express();

const { mongoose } = require('./database');

// Settings
app.set('port', process.env.PORT || 3000);

// Middlewares
app.use(morgan('dev'));
app.use(cors({origin: 'http://localhost:4200'}));
app.use(express.json());

// Routes
app.use('/api/person', require('./routes/person.route'));
app.use('/api/account', require('./routes/account.route'));

// starting the server
app.listen(app.get('port'), () => {
    console.log(`server on port ${app.get('port')}`);
});

module.exports = app;