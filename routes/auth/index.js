// const express = require('express');
// const router = express.Router();
// const passport = require('passport');
// const jwt = require('jsonwebtoken');
// const config = require('../config/database');
// const User = require('../models/user');

// // Register
// router.post('/register', (req, res, next) => {
//   let newUser = new User({
//     name: req.body.name,
//     email: req.body.email,
//     password: req.body.password,
//     role: "Customer"
//   });

//   User.getUserByEmail(newUser.email, (err, user) => {
//     if (err) res.status(500).json({ success: false, msg: 'Failed to register user', err: err });
//     if (!!user) {
//       res.json({ success: false, msg: 'Email address already in use' });
//     } else {
//       User.addUser(newUser, (err, user) => {
//         if (err) {
//           res
//             .status(500)
//             .json({
//               success: false,
//               msg: 'Failed to register user',
//               err: err
//             });
//         } else {
//           res
//             .status(201)
//             .json({
//               success: true,
//               msg: 'User registered'
//             });
//         }
//       });
//     }
//   });
// });

// // Authenticate
// router.post('/login', (req, res, next) => {
//   const email = req.body.email;
//   const password = req.body.password;
//   if (email && password) {
//     User.getUserByEmail(email, (err, user) => {
//       if (err) throw err;
//       if (user) {
//         User.comparePassword(password, user.password, (err, isMatch) => {
//           if (err) throw err;
//           // res.json({ succes: false, msg: 'unable to sign in', err: err });
//           if (isMatch) {
//             const token = jwt.sign({ data: user }, config.secret, {
//               expiresIn: 604800 // 1 week
//             });
//             res.json({
//               success: true,
//               token: token,
//               user: {
//                 id: user._id,
//                 name: user.name,
//                 username: user.username,
//                 email: user.email,
//                 role: user.role
//               }
//             });
//           } else
//             res.json({ success: false, msg: 'Wrong email/password' });
//         });
//       } else {
//         res.json({ success: false, msg: 'Wrong email/password' });
//       }
//     });
//   } else {
//     res.status(400).end();
//   }
// });

// // Profile
// router.get('/profile', passport.authenticate('auth', { session: false }), (req, res, next) => {
//   res.json({ user: req.user });
// });

// module.exports = router;
const cars = require('express').Router();
const all = require('./all');
const single = require('./single');
const findObject = require('../../utils/findObject');

cars.param('carId', findObject('car'));

cars.get('/', all);
cars.get('/:carId', single);

module.exports = cars;