module.exports = {
  secret: "mysecret",
  url: 'mongodb://localhost:27017',
  options: {
    promiseLibrary: require('bluebird'),
    dbName: "restaurant",
    auth: {
      user: "root",
      password: "test"
    }
  }
}
