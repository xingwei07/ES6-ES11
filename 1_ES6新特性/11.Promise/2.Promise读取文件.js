// 引入 fs 模块
const fs = require('fs');

/* // 调用方法读取文件
fs.readFile('../../resources/2.test.txt', (err, data) => {
  if (err) throw err;
  console.log(data.toString())
}) */

// 使用 Promise 读取文件
const p = new Promise(function (resolve, reject) {
  fs.readFile('../../resources/为学.txt', (err, data) => {
    if (err) reject(err);
    resolve(data);
  })
})

p.then(function (value) {
  console.log(value.toString());
}, function (reason) {
  console.log("读取失败！！");
})