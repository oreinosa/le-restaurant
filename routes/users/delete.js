// Delete specific user by id
const User = require('../../models/user');

module.exports = (req, res) => {
  const id = req.params.id;
  User.deleteUser(id, (err, result) => {
    if (err) res.json({ success: false, msg: 'unable to delete user with id ' + id, err: err });
    const flag = !!result.n;
    let msg;
    if (flag) msg = "successfully deleted user";
    else msg = "unable to delete user";
    console.log(msg);
    res.json({ success: flag, msg: msg });
  });
};