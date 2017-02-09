const a = 123;
console.log(a);             // 123

console.log('a: %d', a);    // a: 123

console.info(a);            // 同 console.log

console.warn();
console.error();            // Same as console.log but prints to stderr.

// console.dir(global);        // 打印 node 全局对象

console.time('allTime');
for (var i = 0; i < 10; i++) {
    console.log(i);
};
console.timeEnd('allTime');

console.trace('error');

console.assert(1<0, '%d不小于%d', 1, 0); 

console.assert(1>0, '%d不小于%d', 1, 0); 