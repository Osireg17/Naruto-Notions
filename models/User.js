const mongoose = require('mongoose');
const Schema = mongoose.Schema;
require('mongoose-type-email')
var uniqueValidator = require('mongoose-unique-validator');
const bcrypt = require('bcryptjs');

const userSchema = new Schema({
    email: {type: mongoose.SchemaTypes.Email, required: [true, 'Email is required'], unique: true},
    username: {type: String, required: [true, 'Username is required'], unique: true},
    password: {type: String,required: [true, 'Password is required'], unique: true},
});


userSchema.plugin(uniqueValidator);

userSchema.pre('save', function(next){ //This is the pre-save hook, it is going to be used to hash the password before it is saved in the database.
    const user = this;
    bcrypt.hash(user.password, 10, function(err, hash){
        if(err){
            return next(err);
        }
        user.password = hash;
        next();
    })
})



const User = mongoose.model('User', userSchema);
module.exports = User;