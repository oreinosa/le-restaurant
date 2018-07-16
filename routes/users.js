const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const User = require('../models/user');

// Register
router.post('/sign-up', (req, res, next) => {
  let newUser = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    role: "Customer"
  });

  User.getUserByEmail(newUser.email, (err, user) => {
    if (err) res.status(500).json({ success: false, msg: 'Failed to register user', err: err });
    if (!!user) {
      res.json({ success: false, msg: 'Email address already in use' });
    } else {
      User.addUser(newUser, (err, user) => {
        if (err) {
          res.status(500).json({ success: false, msg: 'Failed to register user', err: err });
        } else {
          res.status(201).json({ success: true, msg: 'User registered' });
        }
      });
    }
  });
});

// Authenticate
router.post('/sign-in', (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;
  if (email && password) {
    User.getUserByEmail(email, (err, user) => {
      if (err) throw err;
      if (user) {
        User.comparePassword(password, user.password, (err, isMatch) => {
          if (err) throw err;
          // res.json({ succes: false, msg: 'unable to sign in', err: err });
          if (isMatch) {
            const token = jwt.sign({ data: user }, config.secret, {
              expiresIn: 604800 // 1 week
            });
            res.json({
              success: true,
              token: token,
              user: {
                id: user._id,
                name: user.name,
                username: user.username,
                email: user.email,
                role: user.role
              }
            });
          } else
            res.json({ success: false, msg: 'Wrong email/password' });
        });
      } else {
        res.json({ success: false, msg: 'Wrong email/password' });
      }
    });
  } else {
    res.status(400).end();
  }
});

// Profile
router.get('/profile', passport.authenticate('auth', { session: false }), (req, res, next) => {
  res.json({ user: req.user });
});

// Get all users
router.get('/', (req, res, next) => {
  User.getUsers({}, (err, users) => {
    if (err) res.json({ success: false, msg: 'unable to get users', err: err });
    if (!!users.length) {
      res.json({ success: true, users: users });
    } else {
      res.json({ success: false, msg: 'no users found' });
    }
  })
});

// Get specific user by id
router.get('/:id', (req, res, next) => {
  const id = req.params.id;
  User.getUserById(id, (err, user) => {
    if (err) res.json({ success: false, msg: 'unable to get user with id ' + id, err: err });
    if (!!user) {
      res.json({ success: true, user: user });
    } else {
      res.json({ success: false, msg: 'user not found' });
    }
  })
});

// Get specific user by id
router.put('/:id', (req, res, next) => {
  const id = req.params.id;
  let updatedUser = req.body;
  User.updateUser(id, updatedUser, (err, writeOpResult) => {
    if (err) res.json({ success: false, msg: 'unable to update user with id ' + id, err: err });
    console.log(writeOpResult);
    res.json({ success: !!writeOpResult.nModified });
  });
});

// Delete specific user by id
router.delete('/:id', passport.authenticate('admin', { session: false }), (req, res, next) => {
  const id = req.params.id;
  User.deleteUser(id, (err, result) => {
    if (err) res.json({ success: false, msg: 'unable to delete user with id ' + id, err: err });
    const flag = !!result.n;
    let msg;
    if (flag) msg = "successfully deleted user";
    else msg = "unable to delete user";
    // console.log(msg);
    res.json({ success: flag, msg: msg });
  })
});

module.exports = router;
