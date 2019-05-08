'use strict'
var jwt = require('jwt-simple');
var moment = require('moment');
var secret = 'gestionAcademica';

//SI los datos son correctos del token que nos llega.El next sale del middleware
exports.ensureAuth = function (req,res,next) {
    if (!req.headers.authorization) {
      return res.status(403).send({message:"La peticion no tiene la cabecera de autenticacion"});
    }

    var token = req.headers.authorization.replace(/['"]+/g,'');//elimina todas las comillas del token
    try {
      var payload = jwt.decode(token,secret);

      if (payload.exp<=moment().unix()) {
        return res.status(401).send({message:"Token ha expirado"});
      }
    } catch (e) {
      //console.log(e);
      return res.status(403).send({message:"Token no valido"});
    }
    
    req.usuario = payload;
    next();
};
