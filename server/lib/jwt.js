'use strict'

var jwt = require('jwt-simple');
var moment = require('moment');
var secret = 'gestionAcademica';

exports.createToken = function(account) {
  var payload = { //El objeto que se va a codificar
    idAccount:account._id, //Para guardar el id del usuario
    user: account.user,
    person: account.person,
    iat: moment().unix(), //Devuelve la fecha en formato similar al de TIMESTAMP de SQL
    exp: moment().add(30,'days').unix //fecha de expiracion
  };

  return jwt.encode(payload,secret);//Codifica una clave secreta
}
