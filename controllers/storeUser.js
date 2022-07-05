const User = require('../models/User');
const path = require('path');

module.exports = (req, res) => {
    User.create(req.body, (error, user) => {
        if (error) {
            //show the errors to the user
            const validationErrors = Object.keys(error.errors).map(key => {error.errors[key].message}); // we go through the errors and get the message for each one
            
            req.flash('validationErrors', validationErrors) // we flash the errors to the session and store then in the flash object
            req.flash('data', req.body) // we flash the data to the session and store then in the flash object)
            return res.redirect('/auth/register');
        } 
        res.redirect('/');
        
    })
}