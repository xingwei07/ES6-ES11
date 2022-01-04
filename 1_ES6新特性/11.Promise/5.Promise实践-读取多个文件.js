// 引入fs模块
const fs = require('fs');

/* fs.readFile('../../resources/悯农.txt', (err1, data1) => {
  fs.readFile('../../resources/插秧诗.txt', (err2, data2) => {
    fs.readFile('../../resources/为学.txt', (err3, data3) => {
      let result = data1 + '\r\n' + data2 +'\r\n'+ data3;
      console.log(result)
    })
  })
}) */

const p = new Promise(function (resolve, reject) {
  fs.readFile('../../resources/为学.txt', (err, data) => {
    resolve(data);
  })
})

p.then((value) => {
  return new Promise(function (resolve, rejece) {
    fs.readFile('../../resources/插秧诗.txt', (err, data) => {
      resolve([value, data])
    })
  })
}).then((value) => {
  return new Promise(function (resolve, reject) {
    fs.readFile('../../resources/悯农.txt', (err, data) => {
      value.push(data)
      resolve(value)
    })
  })
}).then((value) => {
  console.log(value.join('\r\n'))
})