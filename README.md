```javascript
var assert = require('assert')
var fs = require('fs')
var falseENOENT = require('false-enoent')

fs.readFile('nonexistent', falseENOENT(function (error, result) {
  assert.ifError(error)
  assert.strictEqual(result, false)
}))
```
