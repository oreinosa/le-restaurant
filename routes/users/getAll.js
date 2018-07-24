const User = require('../../models/user');

module.exports = (req, res) => {
  // Get all users
  User.getUsers({}, (err, users) => {
    if (err) res.json({ success: false, msg: 'unable to get users', err: err });
    if (!!users.length) {
      res.json({ success: true, users });
    } else {
      res.json({ success: false, msg: 'no users found' });
    }
  });
};