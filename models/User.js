const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');
require('mongoose-type-email')

const userSchema = new Schema({
    email: {type: mongoose.SchemaTypes.Email, required: true, unique: true},
    username: {type: String, required: true, unique: true},
    password: {type: String,required: true}
});

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