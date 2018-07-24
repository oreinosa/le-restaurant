const routes = require('express').Router();
const auth = require('./auth');
const users = require('./users');

routes.use('/auth', auth);
routes.use('/users', users);

// routes.get('/', (req, res) => {
//   res.status(200).sendFile({ message: 'Connected!' });
// });

module.exports = routes;