var crypto = require('crypto'),
    fs = require('fs')

// Algorithm depends on availability of OpenSSL on platform
// Another algorithms: 'sha1', 'md5', 'sha256', 'sha512' ...
var algorithm = 'sha256',
    shasum = crypto.createHash(algorithm)

// Updating shasum with file content
var filename = "index.html" //__dirname + "/anything.txt"
    ,
    s = fs.ReadStream(filename)
s.on('data', function(data) {
    shasum.update(data)
})

// making digest
s.on('end', function() {
    var hash = shasum.digest('hex')
    console.log(hash + '  ' + filename)
})

// Calculating hash from string
var textToHash = "Hello, I want a hash from it",
    shasum2 = crypto.createHash(algorithm)
shasum2.update(textToHash)
var hash2 = shasum2.digest('hex')
console.log(hash2 + '  ' + textToHash)