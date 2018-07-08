var assert = require('assert')
var fs = require('fs')
var falseForENOENT = require('./')

// Sanity Test

fs.readFile('nonexistent', function (error, result) {
  assert.equal(error.code, 'ENOENT')
})

// Yields false for ENOENT Error

fs.readFile('nonexistent', falseForENOENT(function (error, result) {
  assert.ifError(error)
  assert.strictEqual(result, false)
}))

// Yields Results

fs.readFile('package.json', falseForENOENT(function (error, result) {
  assert.ifError(error)
  assert(Buffer.isBuffer(result))
}))

// Multiple Results

falseForENOENT(function (error, a, b) {
  assert.ifError(error)
  assert.equal(a, 1)
  assert.equal(b, 2)
})(null, 1, 2)
