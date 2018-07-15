module.exports = {
  secret: "mysecret",
  url: 'mongodb://localhost:27017',
  options: {
    useNewUrlParser: true,
    promiseLibrary: require('bluebird'),
    dbName: "restaurant"
  }
}
