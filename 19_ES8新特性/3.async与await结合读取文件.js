// 1. 引入 fs 模块
const fs = require('fs');

// 读取为学
function readWeixue () {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      fs.readFile('../resources/为学.txt', (err, data) => {
        if (err) reject(err);
        resolve(data);
      })
    }, 3000)
  })
}

// 读取悯农
function readMinnong () {
  return new Promise((resolve, reject) => {
    fs.readFile('../resources/悯农.txt', (err, data) => {
      if (err) reject(err);
      resolve(data);
    })
  })
}

// 读取插秧诗
function readChayangshi () {
  return new Promise((resolve, reject) => {
    fs.readFile('../resources/插秧诗.txt', (err, data) => {
      if (err) reject(err);
      resolve(data);
    })
  })
}

// 声明一个 async 函数
async function main () {
  let weixue = await readWeixue();

  let minnong = await readMinnong();

  let chayangshi = await readChayangshi();

  console.log(weixue.toString());
  console.log(minnong.toString())
  console.log(chayangshi.toString())
}

main();