const crypto = require('crypto');
const md5 = crypto.createHash('md5');

md5.update('foo');

const res = md5.digest('hex');

console.log(res);