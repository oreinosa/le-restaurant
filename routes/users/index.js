const users = require('express').Router();
const getAllUsers = require('./getAll');
const getUser = require('./getById');
const editUser = require('./edit');
const deleteUser = require('./delete');

users.route('/').get(getAllUsers);

users.route('/:id')
  .get(getUser)
  .put(editUser)
  .delete(deleteUser);

module.exports = users;