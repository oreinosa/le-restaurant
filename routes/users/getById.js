const User = require('../../models/user');

module.exports = (req, res) => {
  // Get specific user by id
  const id = req.params.id;
  User.getUserById(id, (err, user) => {
    if (err) res.json({ success: false, msg: 'unable to get user with id ' + id, err: err });
    if (!!user) {
      res.json({ success: true, user });
    } else {
      res.json({ success: false, msg: 'user not found' });
    }
  })
};