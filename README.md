```javascript
var assert = require('assert')
var fs = require('fs')
var falseForENOENT = require('false-for-enoent')

fs.readFile('nonexistent', falseForENOENT(function (error, result) {
  assert.ifError(error)
  assert.strictEqual(result, false)
}))
```
