const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../../config/database');

// User Schema
const UserSchema = mongoose.Schema({
  name: {
    type: String
  },
  email: {
    type: String,
  },
  password: {
    type: String,
  },
  role: {
    type: String,
  }
});

const User = module.exports = mongoose.model('User', UserSchema);

module.exports.getUsers = (id, callback) => {
  User.find({}, callback);
}

module.exports.getUserById = (id, callback) => {
  if (mongoose.Types.ObjectId.isValid(id)) {
    User.findById(id, callback);
  } else {
    callback();
  }
}

module.exports.getUserByEmail = (candidateEmail, callback) => {
  const query = { email: candidateEmail };
  User.findOne(query, callback);
}

module.exports.addUser = (newUser, callback) => {
  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(newUser.password, salt, (err, hash) => {
      if (err) throw err;
      newUser.password = hash;
      newUser.save(callback);
    });
  });
}

module.exports.updateUser = (id, updatedUser, callback) => {
  const query = { _id: id };
  User.updateOne(query, updatedUser, callback);
}

module.exports.deleteUser = (id, callback) => {
  const query = { _id: id }
  User.deleteOne(query, callback);
}

module.exports.comparePassword = (candidatePassword, hash, callback) => {
  bcrypt.compare(candidatePassword, hash, (err, isMatch) => {
    if (err) throw err;
    callback(null, isMatch);
  });
}