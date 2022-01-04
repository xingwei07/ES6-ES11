// 全局引入
/* import * as m1 from "./hello.js"

const btn = document.getElementById('btn');

btn.onclick = function () {
  m1.showHello()
}
 */
// 动态引入
const btn = document.getElementById('btn');

btn.onclick = function () {
  import('./hello.js').then(module => {
    module.showHello()
  })
}