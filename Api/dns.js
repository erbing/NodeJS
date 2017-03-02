const dns = require('dns');

// console.log(dns)

dns.lookup('vuejs.com.cn', (err, addresses, family) => {
    console.log('addresses1:', addresses)        // 58.64.156.143
});

const options = {
    all: true,
    family: 4,  // 4 or 6  ipv4 or ipv6
    // hints  
}

dns.lookup('vuejs.com.cn', options, (err, addresses, family) => {
    console.log('addresses1:', addresses)        //  [ { address: '58.64.156.143', family: 4 } ]
});


// 域名解析
dns.resolve4('vuejs.com.cn', (err, addresses) => {

    if (err) throw err;

    console.log('addresses2:', JSON.stringify(addresses));
    console.log(`addresses3: ${JSON.stringify(addresses)}`);
});


// 那么 lookup  和 resolve4 有什么区别呢？
// 
// 其实本质上没什么区别， 唯一的区别就是 在 是否有本地HOST 文件
// 比如我 在本地 host 文件中将 vuejs.com.cn    127.0.0.1

// 那么我们再去试试这个 lookup  和 resolve4
// 我们会发现  由于 lookup 是底层操作系统来查询的，并且不链接网络，所以最多就查询到 本地 host （当本地host存在的时候）
// 但是 resolve4却不一样
// 
// lookup  --- 127.0.0.1
// resolve4 -- 58.64.156.143