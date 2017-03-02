// 抛出一个 ReferenceError，因为 z 为 undefined
try {
  const m = 1;
  const n = m + z;
} catch (err) {
  // 在这里处理错误。
  console.log(err)
}

// E:\2\NodeJS\Api>node error.js
// ReferenceError: z is not defined


// 抛出一个 RangeError
require('net').connect(-1);
// RangeError: "port" option should be >= 0 and < 65536: -1


// 抛出一个 SyntaxError
try {
  require('vm').eval('binary ! isNotOk');
} catch(err) {
  // err 是一个 SyntaxError
  console.log(err)
}


require('url').parse(() => { });
  // 抛出 TypeError，因为它期望的是一个字符串

try {
  decodeURIComponent('%');
} catch (e) {
  console.log(e instanceof URIError); // true
  console.log(e.message);             // "malformed URI sequence"
  console.log(e.name);                // "URIError"
  console.log(e.fileName);            // "Scratchpad/1"
  console.log(e.lineNumber);          // 2
  console.log(e.columnNumber);        // 2
  console.log(e.stack);               // "@Scratchpad/2:2:3\n"
}

// 抛出 URIError，URI 处理函数被误用