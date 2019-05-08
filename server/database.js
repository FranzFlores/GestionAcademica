const mongoose = require('mongoose');
const URI = 'mongodb://localhost/gestionAcademico';

mongoose.connect(URI,{ useNewUrlParser: true })
    .then(db => console.log('Base de Datos conectada'))
    .catch(err => console.error(err));

module.exports = mongoose;