const sequilize = require('sequilize');
const passport = require('passport');
const settings = require('../config/settings');
require('../config/passport')(passport);
const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();
const User = require('../models/users');

router.post('/register', function(req, res){
    if(!req.body.username || !req.body.password || !req.body.password2){
        res.json({ success: false, msg: 'Please input username and password.'});
    }else {
        var newUser = new User({
            username: req.body.username,
            password: req.body.password,
            password2: req.body.password2
        });
        //save the user
        newUser.save(function(err){
            if(err){
                return res.json({ success: false, msg: 'Username already exisits.' });
            }
            res.json({ success: true, msg: 'Successfully created new user' });
        });
    }
});

router.post('/login', function(req, res){
    User.findOne({
        username: req.body.username
    }, function(err, user){
        if(err) throw err;

        if(!user) {
            res.status(401).send({ success: false, msg: 'Authentication faild. User not found.' });
        }else {
            //check if password matches
            user.comparePassword(req.body.password, function(err, isMatch){
                if(isMatch && !err) {
                    //if user is found and password is right create a token
                    var token = jwt.sign(user.toJSON(), settings.secret);
                    //return the information including token as JSON
                    res.json({ success: true, token: 'JWT ' + token });
                }else {
                    res.status(401).send({ success: false, msg: 'Authentication failed. Wrong password.' });
                }
            });
        }
    });
});

module.exports = router;