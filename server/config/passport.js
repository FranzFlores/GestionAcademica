'use strict'
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const Account = require('../models/account.model');

module.exports = function(passport){
  const LocalStrategy = require('passport-local').Strategy;
  


  let opts = {};
  opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
  opts.secretOrKey = 'gestionAcademica';
  passport.use(new JwtStrategy(opts, (jwt_payload, done) => {
    Account.findById(jwt_payload.data._id, (err, account) => {
      if(err){
        return done(err, false);
      }
      if(account){
        return done(null, user);
      } else {
        return done(null, false);
      }
    });
  }));
}