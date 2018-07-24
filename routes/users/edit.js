const User = require('../../models/user');

// Edit specific user by id
module.exports = (req, res) => {
  const id = req.params.id;
  let updatedUser = req.body;
  User.updateUser(id, updatedUser, (err, writeOpResult) => {
    if (err) res.json({ success: false, msg: 'unable to update user with id ' + id, err: err });
    console.log(writeOpResult);
    res.json({ success: !!writeOpResult.nModified });
  });
};