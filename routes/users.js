const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const User = require('../models/user');


// Get all users
router.get('/', (req, res, next) => {
  User.getUsers({}, (err, users) => {
    if (err) res.json({ success: false, msg: 'unable to get users' + err });
    res.json({ success: true, users: users });
  })
});

// Get specific user by id
router.get('/:id', (req, res, next) => {
  const id = req.params.id;
  User.getUserById(id, (err, user) => {
    if (err) res.json({ success: false, msg: 'unable to get user with id ' + id + '' + err });
    res.json({ success: true, user: user });
  })
});

// Get specific user by id
router.put('/:id', (req, res, next) => {
  const id = req.params.id;
  let updatedUser = {
    name: req.body.name,
    email: req.body.email,
    username: req.body.username,
    password: req.body.password
  };
  User.updateUser(id, updatedUser, (err, writeOpResult) => {
    if (err) return res.json({ success: false, msg: 'unable to update user with id ' + id + '' + err });
    res.json({ success: true });
  })
});

// Delete specific user by id
router.delete('/:id', (req, res, next) => {
  const id = req.params.id;
  User.deleteUser(id, (err, result) => {
    if (err) res.json({ success: false, msg: 'unable to delete user with id ' + id + '' + err });
    const flag = !!result.n;
    let msg;
    if (flag) msg = "Deleted user " + id;
    else msg = "Unable to delete user with id " + id;
    // console.log(msg);
    res.json({ success: flag, msg: msg });
  })
});

// Register
router.post('/sign-up', (req, res, next) => {
  console.log('sign up ');
  let newUser = new User({
    name: req.body.name,
    email: req.body.email,
    username: req.body.username,
    password: req.body.password
  });

  User.addUser(newUser, (err, user) => {
    if (err) {
      res.json({ success: false, msg: 'Failed to register user' });
    } else {
      res.json({ success: true, msg: 'User registered' });
    }
  });
});

// Authenticate
router.post('/sign-in', (req, res, next) => {
  const username = req.body.username;
  const password = req.body.password;

  User.getUserByUsername(username, (err, user) => {
    if (err) throw err;
    if (!user) {
      return res.json({ success: false, msg: 'User not found' });
    }

    User.comparePassword(password, user.password, (err, isMatch) => {
      if (err) throw err;
      if (isMatch) {
        const token = jwt.sign({ data: user }, config.secret, {
          expiresIn: 604800 // 1 week
        });

        res.json({
          success: true,
          token: `Bearer ${token}`,
          user: {
            id: user._id,
            name: user.name,
            username: user.username,
            email: user.email
          }
        });
      } else {
        return res.json({ success: false, msg: 'Wrong password' });
      }
    });
  });
});

// Profile
router.get('/profile', passport.authenticate('jwt', { session: false }), (req, res, next) => {
  res.json({ user: req.user });
});


module.exports = router;
