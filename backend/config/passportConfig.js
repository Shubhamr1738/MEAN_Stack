const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const mongoose = require('mongoose');
const UserData = require('../mongoDB/models/userData-model');

passport.use(
    new LocalStrategy({ usernameField: 'username' }, 
        (username, password,done)=>{
            UserData.findOne({username:username},(err,user)=>{
                if(err)
                    return done(err);
                else if(!user)
                    return done(null,false,{message:'Incorrect username'});
                else if(!user.validPassword(password))  
                    return done(null,false,{message:'Wrong password'});
                else
                    return done(null,user);
            })
      })
    );