module.exports = function falseForENOENT (callback) {
  return function (/* arguments */) {
    var error = arguments[0]
    if (error) {
      if (error.code === 'ENOENT') {
        return callback(null, false)
      } else {
        return callback(error)
      }
    }
    callback.apply(null, arguments)
  }
}
