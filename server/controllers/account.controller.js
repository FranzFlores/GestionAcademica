'use strict'
var mongoose = require('mongoose');
var helpers = require('../lib/helpers');
var jwt = require('jsonwebtoken');



var Person = require('../models/person.model');
var Account = require('../models/account.model');

const AccountController = {};

AccountController.test = (req,res)=>{
  res.send('OK');
};

AccountController.update_password = (req, res) => {
  var accountId = req.params.id;
  var newPassword = req.body.newPassword;
  var oldPassword = req.body.oldPassword;
  
  Account.findById(accountId, (err, account) => {
    if (err) res.status(500).send('Error');
    if (account) {
      if (helpers.matchPassword(oldPassword,account.password)) {
        var hash = helpers.generateHash(newPassword);
        var update = {};
        update.password = hash;
        Account.findByIdAndUpdate(accountId, update, (err, account) => {
          if (err) res.status(500).send({ message: "Error en la peticion" });
          else {
            if (!account) res.status(404).send({ message: "No se actualizo la cuenta" });
            else res.status(200).send({"account":account});
          }
        });
      }
    }
  });
};

AccountController.login = (req,res)=>{
  console.log(req.body);
   Account.findOne({user:req.body.user},(err,account)=>{
    if(err) res.status(500).send({ message: "Error en la peticion" });
    else{
      if(!account) res.status(404).send({ message: "No existe la cuenta" });
      else{
        if (helpers.matchPassword(req.body.password,account.password)) {
          const token = jwt.sign({data:account},'gestionAcademica',{
            expiresIn: 604800
          });
          res.json({
            token: token,
            user:{
              id:account._id,
              user:account.user,
            } 
          });
        }else{
          return res.json({success: false, msg: 'Wrong password'})
        }
      }
    }
   });
};

module.exports = AccountController;