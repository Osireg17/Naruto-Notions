"use strict";

var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var bcrypt = require('bcrypt');

require('mongoose-type-email');

var uniqueValidator = require('mongoose-unique-validator');

var userSchema = new Schema({
  email: {
    type: mongoose.SchemaTypes.Email,
    required: [true, 'Email is required'],
    unique: true
  },
  username: {
    type: String,
    required: [true, 'Username is required'],
    unique: true
  },
  password: {
    type: String,
    required: [true, 'Password is required'],
    minlength: [8, 'Password must be at least 8 characters long']
  }
});
userSchema.plugin(uniqueValidator);
userSchema.pre('save', function (next) {
  //This is the pre-save hook, it is going to be used to hash the password before it is saved in the database.
  var user = this;
  bcrypt.hash(user.password, 10, function (err, hash) {
    if (err) {
      return next(err);
    }

    user.password = hash;
    next();
  });
});
var User = mongoose.model('User', userSchema);
module.exports = User;