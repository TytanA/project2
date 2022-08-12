const mongoose = require('mongoose');

// Create your User Model
const userSchema = new mongoose.Schema({
	googleId: {
	  type: String,
	  required: true
	},
	email: String,
  }, {
	timestamps: true
  });

  module.exports = mongoose.model('User1', userSchema)