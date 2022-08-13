//This file is going to be used to check if the username and password are correct and therefore login the user in the system.
const bcrypt = require('bcryptjs');
// const bcrypt = require('bcrypt');
const User = require('../models/User');

module.exports = (req, res) => {
    const { username, password } = req.body;
    User.findOne({ username: username }, (err, user) => {
        if(user){
            bcrypt.compare(password, user.password, (err, result) => {
                if(result){
                    req.session.user = user; //This is the session that is going to be used to keep track of the user.
                    res.redirect('/');
                }
                else{
                    res.redirect('/auth/login');
                }
            })
        }
        else{
            res.redirect('/auth/login');
        }
        if(err){
            console.log(err);
        }
    });
    
}