# ES6 新特性

## 1.let 关键字

- 声明**变量**

  ```js
  let a;
  let b, c, d;
  let e = 100;
  let f = 521,
    g = "live",
    h = [];
  ```

1. 变量不能重复声明

   ```js
   let star = "罗志祥";
   let star = "小猪"; // 报错
   ```

2. 块级作用域 全局， 函数， eval
   if else while for

   ```js
   {
     var girl = "小红";
   }
   console.log(girl); // 小红
   
   // {
   // 	  let girl = '小红';
   // }
   // console.log(girl) // 报错
   ```

3. 不存在变量提升

   ```js
   console.log(song); // undefined
   var song = "恋爱";

   // console.log(sas) // 报错
   // let sas = 'love'
   ```

4. 不影响作用域链

   ```js
   {
     let school = "尚硅谷";
     function fn() {
       console.log(school); // 尚硅谷
     }
     fn();
   }
   ```

## 2.const 关键字

- 声明**常量**
  ```js
  const SCHOOL = "尚硅谷";
  ```

1. 一定要赋初始值

   ```js
   const A; // 报错
   ```

2. 一般常量使用大写(潜规则)

   ```js
   const a = 100; // 不报错
   ```

3. 常量的值不能修改

   ```js
   SCHOOL = "ATGUIGU"; // 报错
   ```

4. 块级作用域

   ```js
   {
     const PLAYER = "UZI";
   }
   // console.log(PLAYER); // 报错 PLAYER is not defined
   ```

5. 对数组和对象的元素修改，不算做对常量的修改，不会报错

   ```js
   const TEAM = ["UZI", "MXLG", "Ming"];
   TEAM.push("Mekio"); // 不报错
   // TEAM = []; // 报错
   ```

## 3.变量的解构赋值

> ES6 允许按照一定模式从数组和对象中提取值，对变量进行赋值。
> 这被称之为解构赋值

1. 数组的解构

   ```js
   const F4 = ["小沈阳", "刘能", "赵四", "宋小宝"];
   let [xiao, liu, zhao, song] = F4;

   console.log(xiao, liu, zhao, song);
   ```

2. 对象的解构

   ```js
   const zhao = {
     name: "赵本山",
     age: "不详",
     xiaopin: function () {
       console.log("我可以演小品");
     },
   };
   
   let { name, age, xiaopin } = zhao;
   console.log(name, age, xiaopin);
   
   // 单独解构
   let { xiaopin } = zhao;
   console.log(xiaopin);
   ```

## 4.模板字符串

> ES6 引入新的声明字符串的方式 ``

1. 声明

   ```js
   let str = `我也是一个字符串`;
   console.log(str, typeof str); // String
   ```

2. 内容中可以直接出现换行符

   ```js
   let str = `<ul>
                  <li></li>
            <ul>`;
   ```

3. 变量拼接

   ```js
   let lovest = "魏翔";
   let out = `${lovest}是我心目中最搞笑的演员`;
   
   console.log(out);
   ```

## 5. 简化对象写法

> ES6 允许在大括号里面直接写入变量和函数，作为对象的属性和方法。
> 这样的书写更简洁

```js
let name = "尚硅谷";
let change = function () {
  console.log("我们可以改变你");
};

const school = {
  name,
  change,
  updata: function () {
    console.log("没有简化的方法");
  },
  umprove() {
    console.log("方法也可以简化");
  },
};

console.log(school);
```

## 6.箭头函数

> ES6 允许使用 箭头函数(=>) 定义函数

- 声明一个函数

  ```js
  let fn = function () {};

  let fns = (a, b) => {
    return a + b;
  };
  ```

- 调用函数
  ```js
  let result = fns(1, 2);
  console.log(result); // 3
  ```

1. this 是静态的，`this 始终指向函数声明时所在作用域下的 this 的值`

   ```js
   function getName() {
     console.log(this.name);
   }

   let getName2 = () => {
     console.log(this.name);
   };

   // 设置 window 对象的 name 属性
   window.name = "尚硅谷";
   const school = {
     name: "ATGUIGU",
   };

   // 直接调用
   getName(); // 尚硅谷
   getName2(); // 尚硅谷

   // call 方法调用
   getName.call(school); // ATGUIGU
   getName2.call(school); // 尚硅谷
   ```

2. `不能作为构造函数`实例化对象

   ```js
   let Person = (name, age) => {
     this.name = name;
     this.age = age;
   };

   let me = new Person("小红", 30); // 报错 Person is not a constructor
   ```

3. 不能使用 argument 保存实参

   ```js
   let fn = () => {
     console.log(argument); // 报错 argument is not defined
   };
   fn(1, 2, 3);
   ```

4. 箭头函数的简写

   1. `省略小括号`，当形参有且只有一个的时候

      ```
      let add = n => {
        return n + n;
      };
      console.log(add(9));
      ```

   2. `省略花括号`，当代码体只有一条语句的时候，此时 `return` 必须省略，而且语句的执行结果就是函数的返回值

      ```
      let pow = n => n * n;
      console.log(pow(9));
      ```

> 箭头函数`适合`与` this 无关`的回调：定时器、数组的方法的回调
> 箭头函数`不适合`与` this 有关`的回调：事件回调、对象的方法

```js
const obj = {
  name: "尚硅谷",
  getName: function () {
    // this 指向 obj
    console.log(this);
  },
  getThis: () => {
    // this 指向 window
    console.log(this);
  },
};
```

## 7.参数默认值

> ES6 允许给函数参数赋初始值

1. 形参初始值 具有默认值的参数一般位置都靠后

   ```js
   function add(a, b, c = 0) {
     return a + b + c;
   }
   let result = add(1, 2);
   console.log(result); // 3
   ```

2. 与解构赋值结合

   ```js
   function connect({ host, username, password, port = 5000 }) {
     console.log(host, username, password, port); // localhost root root 5000
   }
   connect({
     host: "localhost",
     username: "root",
     password: "root",
   });
   ```

## 8.rest 参数

> ES6 引入 rest 参数，用于获取函数的实参，用来代替 arguments

- ES5 获取实参的方式

  ```js
  function data() {
    console.log(arguments); // 对象
  }
  data("白芷", "阿娇", "思慧");
  ```

- rest 参数

  ```js
  function data(...args) {
    console.log(args); // 整合成数组 ['白芷', '阿娇', '思慧']
  }
  data("白芷", "阿娇", "思慧");
  ```

- rest 参数必须要放到参数最后

  ```js
  function fn(a, b, ...args) {
    console.log(a); // 1
    console.log(b); // 2
    console.log(args); // [3, 4, 5]
  }
  fn(1, 2, 3, 4, 5);
  ```

## 9.扩展运算符

> `...` 扩展运算符能将 数组 转换为逗号分隔的 参数序列

```js
// 声明一个数组
const tfBoys = ["易烊千玺", "王源", "王俊凯"];

// 声明一个函数
function chunwan() {
   console.log(arguments)
}

chunwan(...tfBoys) 等同于
chunwan('易烊千玺', '王源', '王俊凯')
```

1. 数组的合并

   ```js
   const kuaizi = ["王太利", "肖央"];
   const fenghuang = ["曾毅", "玲花"];

   // const zuixuanxiaopingguo = kuaizi.concat(fenghuang);
   const zuixuanxiaopingguo = [...kuaizi, ...fenghuang];

   console.log(zuixuanxiaopingguo); // '王太利', '肖央', '曾毅', '玲花'
   ```

2. 数组的克隆 `浅拷贝`

   ```js
   const sanzhihua = ["E", "G", "M"];
   const sanyecao = [...sanzhihua];
   console.log(sanyecao); // ["E", "G", "M"]
   ```

3. 将伪数组转为真正的数组

   ```js
   const divs = document.querySelectorAll("div");
   const divArr = [...divs];
   console.log(divArr);
   ```

## 10.Symbol

> ES6 引入的新的原始数据类型表示`独一无二的值`。
> 它是 js 的`第七种`数据类型。
> 是一种类似于字符串的数据类型。

- `Symbol` 创建得到的 Symbol 是`唯一`的

  ```js
  let s = Symbol();
  console.log(s, typeof s); // Symbol() 'symbol'

  let s2 = Symbol("尚硅谷");
  let s3 = Symbol("尚硅谷");
  console.log(s2 === s3); //false
  ```

- `Sysbol.for` 创建 得到的 Symbol 是`一样`的

  ```js
  let s4 = Symbol.for("尚硅谷");
  let s5 = Symbol.for("尚硅谷");
  console.log(s4 === s5); // true
  ```

- 不能与其他数据进行运算

  ```js
  let result = s + 100; // 报错
  let result = s > 100; // 报错
  let result = s + "100"; // 报错
  ```

- 七中基本数据类型

  **USONB**
  `U` undefined
  `S` String Symbol
  `O` Object
  `N` Null Number
  `B` Boolean

**特点：**

- 1. Symbol 的值是`唯一`的，用来解决命名冲突的问题
- 2. Symbol 值不能与 其他数据进行运算
- 3. Symbol 定义的对象属性不能使用 `for...in` 进行循环遍历，但是可以使用 `Reflect.ownKeys` 来获取对象的所有键名

### 向对象中添加方法

- 第一种方式

  ```js
  let game = {
    name: "尚硅谷",
    up: function () {},
    down: function () {},
  };

  // 声明一个对象
  let methods = {
    up: Symbol(),
    down: Symbol(),
  };

  // 向game中添加方法
  game[methods.up] = function () {
    console.log("我可以改变形状");
  };
  game[methods.down] = function () {
    console.log("我可以快速下降");
  };

  console.log(game); // 不会覆盖原方法
  ```

- 第二种方式

  ```js
  let youxi = {
    name: "狼人杀",
    [Symbol("say")]: function () {
      console.log("我可以发言");
    },
    [Symbol("zibao")]: function () {
      console.log("我可以自爆");
    },
  };
  console.log(youxi);
  ```

### Symbol 的内置属性

- `Symbol.hasInstance`：当其他的对象使用 instanceof 运算符，判断是否为该对象的实例时，会调用这个方法

  ```js
  class Person {
    static [Symbol.hasInstance](param) {
      console.log(param);
      console.log("我被用来检测属性了");
      return false;
    }
  }

  let o = {};
  console.log(o instanceof Person); // 我被用来检测属性了
  ```

- 对象的 `Symbol.isConcatSpreadable` 属性等于的是一个布尔值，表示该对象用于` Arrary.prototype.concat()`时，是否可以展开

  ```js
  const arr = [1, 2, 3];
  const arr2 = [4, 5, 6];
  arr2[Symbol.isConcatSpreadable] = false;
  console.log(arr.concat(arr2)); // [1, 2, 3, [4, 5, 6]]
  ```

## 11.迭代器 `Symbol.iterator`

工作原理：

1. 创建一个指针对象，指向当前数据结构的起始位置。
2. 第一次调用对象的 next 方法，指针自动指向数据结构的第一个成员。
3. 接下来不断调用 next 方法，指针一直往后移动，直到指向最后一个成员。
4. 每调用 next 方法返回一个包含 value 和 done 属性的对象。

```js
// 声明一个数组
const xiyou = ["唐僧", "孙悟空", "猪八戒", "沙僧"];

// 使用 for...of 遍历
for (let v of xiyou) {
  console.log(v); // 值
}

// 使用 for...in 遍历
for (let v in xiyou) {
  console.log(v); // 键名
}

let iterator = xiyou[Symbol.iterator]();

// 调用对象的next方法
console.log(iterator.next()); // value：唐僧  down：false
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next()); // value：undefined  down：true
```

- 迭代器自定义遍历对象

  ```js
  const banji = {
    name: "终极一班",
    stus: ["xiaoming", "xiaoning", "xiaotian", "knight"],
    [Symbol.iterator]() {
      // 定义索引
      let index = 0;
  
      const _this = this;
      return {
        next: function () {
          if (index < _this.stus.length) {
            const result = { value: _this.stus[index], done: false };
            index++;
            return result;
          } else {
            return { value: undefined, done: true };
          }
        },
      };
    },
  };
  
  // 遍历 banji，得到 banji.stus 中的值
  for (v of banji) {
    console.log(v);
  }
  ```

## 12.生成器

> 生成器其实就是一个特殊的函数
> 异步编程 纯回调函数 node fs ajax mongodb

### 调用

```js
function* gen() {
  console.log(111);
}

let iterator = gen();
iterator.next(); // 必须通过next()调用
```

- 函数代码的分隔符 将程序分为四个代码块

  ```js
  function* gen() {
    console.log(111);
    yield "一直没有耳朵";
    console.log(222);
    yield "一直没有尾巴";
    console.log(333);
    yield "真奇怪";
    console.log(444);
  }

  let iterator = gen();
  iterator.next(); //  111
  iterator.next(); //  222
  iterator.next(); //  333
  iterator.next(); //  444
  ```

- 遍历

  ```js
  function* gen() {
    yield "一直没有耳朵";
    yield "一直没有尾巴";
    yield "真奇怪";
  }

  for (v of gen()) {
    console.log(v); // 一直没有耳朵  一直没有尾巴  真奇怪
  }
  ```

- next()

  ```js
  function* gen() {
    yield "一直没有耳朵";
    yield "一直没有尾巴";
    yield "真奇怪";
  }
  
  let iterator = gen();
  console.log(iterator.next()); // {value: '一直没有耳朵', done: false}
  console.log(iterator.next()); // {value: '一直没有尾巴', done: false}
  console.log(iterator.next()); // {value: '真奇怪', done: false}
  console.log(iterator.next()); // {value: undefined, done: true}
  ```

### 传递参数

```js
function* gen(arg) {
  console.log(arg); // AAA
  let one = yield 111;
  console.log(one); // BBB
  let two = yield 222;
  console.log(two); // CCC
  let three = yield 333;
  console.log(three); // DDD
}

// 执行获取迭代器对象
let iterator = gen("AAA");
console.log(iterator.next());
// next方法可以传入实参
console.log(iterator.next("BBB")); // 传入参数作为第一个 yield 的返回值
console.log(iterator.next("CCC")); // 传入参数作为第二个 yield 的返回值
console.log(iterator.next("DDD")); // 传入参数作为第三个 yield 的返回值
```

> **异步编程 文件操作 网络编程(ajax, request) 数据库操作**

### 异步操作实例-1

- 1s 后控制台输出 111， 2s 后控制台输出 222， 3s 后控制台输出 333

  ```js
  function one() {
    setTimeout(() => {
      console.log(111);
      iterator.next();
    }, 1000);
  }
  function two() {
    setTimeout(() => {
      console.log(222);
      iterator.next();
    }, 1000);
  }
  function three() {
    setTimeout(() => {
      console.log(333);
      iterator.next();
    }, 1000);
  }
  
  function* gen() {
    yield one();
    yield two();
    yield three();
  }
  
  let iterator = gen();
  iterator.next();
  ```

### 异步操作实例-2

- 模拟获取 用户数据 订单数据 商品数据

  ```js
  function getUsers() {
    setTimeout(() => {
      let data = "用户数据";
      iterator.next(data);
    }, 1000);
  }
  function getOrders() {
    setTimeout(() => {
      let data = "订单数据";
      iterator.next(data);
    }, 1000);
  }
  function getGoods() {
    setTimeout(() => {
      let data = "商品数据";
      iterator.next(data);
    }, 1000);
  }
  
  function* gen() {
    let user = yield getUsers();
    console.log(user); // 用户数据
    let order = yield getOrders();
    console.log(order); // 订单数据
    let good = yield getGoods();
    console.log(good); // 商品数据
  }
  
  let iterator = gen();
  iterator.next();
  ```

## 13.Promise

### Promise 基本语法

```js
// 实例化 Promise 对象
const p = new Promise(function (resolve, reject) {
  setTimeout(() => {
    let data = "用户数据";
    // // 成功
    // resolve(data);

    // 失败
    reject("获取失败");
  }, 1000);
});

// 调用 Promise 对象的 then 方法
p.then(
  function (value) {
    console.log(value); // 用户数据
  },
  function (reason) {
    console.log(reason); // 获取失败
  }
);
```

### 使用 Promise 读取文件

```js
// 引入 fs 模块
const fs = require("fs");

/* // 调用方法读取文件
fs.readFile('../resources/2.test.txt', (err, data) => {
  if (err) throw err;
  console.log(data.toString())
}) */

// 使用 Promise 读取文件
const p = new Promise(function (resolve, reject) {
  fs.readFile("../resources/2.test.txt", (err, data) => {
    if (err) reject(err);
    resolve(data);
  });
});

p.then(
  function (value) {
    console.log(value.toString());
  },
  function (reason) {
    console.log(reason);
  }
);
```

### 使用 Promise 封装 AJAX 请求

```js
const p = new Promise(function (resolve, reject) {
  // 1. 创建对象
  const xhr = new XMLHttpRequest();

  // 2. 初始化
  xhr.open("GET", "http://localhost:3000/channels");

  // 3. 发送
  xhr.send();

  // 4. 绑定事件，处理响应结果
  xhr.onreadystatechange = function () {
    // 判断
    if (xhr.readyState === 4) {
      // 判断响应状态码 200-299
      if (xhr.status >= 200 && xhr.status < 300) {
        // 成功
        resolve(xhr.response);
      } else {
        reject(xhr.status);
      }
    }
  };
});

p.then(
  function (value) {
    console.log(value);
  },
  function (reason) {
    console.error(reason);
  }
);
```

### then 的返回值

```js
// 创建 promise 对象
const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("用户数据");
    // reject("失败了");
  }, 1000);
});

// 调用 then 方法  then 方法的返回结果是 Promise 对象，对象状态由回调函数的执行结果决定
// 1. 如果回调函数中返回的结果是 非Promise函类型的数据，状态为成功，返回值为对象的成功的值
const result = p.then(
  (value) => {
    console.log(value);
    // 1. 非 Promise 类型的数据
    // return 123;
    // 2. 是 Promise 对象
    /* return new Promise((resolve, reject) => {
         resolve('Ok');
       }) */
    // 3. 抛出错误
    // throw new Error('出错了');
    throw "出错了";
  },
  (reason) => {
    console.warn(reason);
  }
);

// 链式调用
p.then((value) => {}).then((valie) => {});

console.log(result);
```

### Promise 链式调用案例

```js
// 引入fs模块
const fs = require("fs");

/* fs.readFile('../resources/悯农.txt', (err1, data1) => {
  fs.readFile('../resources/插秧诗.txt', (err2, data2) => {
    fs.readFile('../resources/为学.txt', (err3, data3) => {
      let result = data1 + '\r\n' + data2 +'\r\n'+ data3;
      console.log(result)
    })
  })
}) */

const p = new Promise(function (resolve, reject) {
  fs.readFile("../resources/为学.txt", (err, data) => {
    resolve(data);
  });
});

p.then((value) => {
  return new Promise(function (resolve, rejece) {
    fs.readFile("../resources/插秧诗.txt", (err, data) => {
      resolve([value, data]);
    });
  });
})
  .then((value) => {
    return new Promise(function (resolve, reject) {
      fs.readFile("../resources/悯农.txt", (err, data) => {
        value.push(data);
        resolve(value);
      });
    });
  })
  .then((value) => {
    console.log(value.join("\r\n"));
  });
```

## 14.Set-集合

### Set 基本使用

- 声明一个 set

  ```js
  let s = new Set();
  // 赋初始值 自动去重
  let s2 = new Set(["大事儿", "小事儿", "天下事儿", "天下事儿"]);
  ```

- 元素个数

  ```js
  console.log(s2.size); // 3
  ```

- 添加新元素

  ```js
  s2.add("喜事儿");
  ```

- 删除元素

  ```js
  s2.delete("大事儿");
  ```

- 检测

  ```js
  console.log(s2.has("小事儿")); // true
  console.log(s2.has("坏事儿")); // false
  ```

- 清空元素

  ```js
  s2.clear();
  ```

- 遍历元素
  ```js
  for (v of s2) {
    console.log(v);
  }
  ```

### Set 综合实践

- 1.数组去重

  ```js
  let arr = [1, 2, 3, 4, 5, 4, 3, 2, 1];

  let result = [...new Set(arr)];
  console.log(result); // 1, 2, 3, 4, 5
  ```

- 2.交集

  ```js
  let arr = [1, 2, 3, 4, 5, 4, 3, 2, 1];
  let arr2 = [4, 5, 6, 5, 6];

  let result = [...new Set(arr)].filter((item) => {
    return new Set(arr2).has(item);
  });
  console.log(result); // 4, 5
  ```

- 3.并集

  ```js
  let arr = [1, 2, 3, 4, 5, 4, 3, 2, 1];
  let arr2 = [4, 5, 6, 5, 6];

  let union = [...new Set([...arr, ...arr2])];
  console.log(union);
  ```

- 4.差集

  ```js
  let arr = [1, 2, 3, 4, 5, 4, 3, 2, 1];
  let arr2 = [4, 5, 6, 5, 6];
  
  const diff = [...new Set(arr)].filter((item) => {
    return !new Set(arr2).has(item);
  });
  console.log(diff);
  ```

## 15.Map - 键值对集合

> 类似于对象，也是键值对的集合，但是“键”的范围`不限于字符串`，各种类型的值（包括对象）都可以当做键。

- 声明 Map

  ```js
  let m = new Map();
  ```

- 添加元素

  ```js
  m.set("name", "尚硅谷");
  // 值可以为方法
  m.set("change", function () {
    console.log("我们可以改变你！");
  });
  let key = {
    school: "ATGUIGU",
  };
  // 键可以为对象
  m.set(key, ["北京", "上海", "深圳"]);
  ```

- 大小

  ```js
  console.log(m.size);
  ```

- 删除

  ```js
  m.delete("name");
  ```

- 获取

  ```js
  console.log(m.get("change"));
  console.log(m.get(key));
  ```

- 清空

  ```js
  m.clear();
  ```

- 遍历
  ```js
  for (let v of m) {
  	console.log(v);
  }
  ```

## 16.class 类

### class 基本语法

```js
function Phone(brand, price) {
  this.brand = brand;
  this.price = price;
}

Phone.prototype.call = function () {
  console.log("我可以打电话");
};

const Huawei = new Phone("华为", 3999);
Huawei.call();
console.log(Huawei);


class Shouji {
  // 构造方法
  constructor(brand, price) {
    this.brand = brand;
    this.price = price;
  }
  call() {
    console.log("我可以打电话");
  }
}

const onePlus = new Shouji("1+", 1999);
onePlus.call();
console.log(onePlus);
```

### 类的静态成员

- ES5

  ```js
  function Phone() {}

  // 属于函数对象，不属于实例对象  称为静态成员
  Phone.name = "手机";
  Phone.change = function () {
    console.log("我可以改变世界");
  };

  // 实例对象可以访问，函数对象不能访问
  Phone.prototype.size = "5.1inch";

  let nokia = new Phone();

  // 实例对象与函数对象属性不互通
  console.log(nokia.name); // undefined
  nokia.change(); // nokia.change is not a function
  console.log(nokia.size); // 5.1inch
  ```

- ES6

  ```js
  class Phone {
    // 静态属性  属于类 不属于实例对象
    static name = "手机";
    static change() {
      console.log("我可以改变世界");
    }
  }
  
  let nokia = new Phone();
  console.log(nokia.name); // undefined
  console.log(Phone.name); // 手机
  nokia.change(); // nokia.change is not a function
  ```

### 类继承

- ES5

  ```js
  // 手机
  function Phone(brand, price) {
    this.brand = brand;
    this.price = price;
  }

  Phone.prototype.calls = function () {
    console.log("我可以改变世界");
  };

  // 智能手机
  function SmartPhone(brand, phone, color, size) {
    // call() 调用父类构造方法
    Phone.call(this, brand, phone);
    this.color = color;
    this.size = size;
  }

  // 设置子集构造函数的原型
  SmartPhone.prototype = new Phone();
  SmartPhone.prototype.constructor = SmartPhone;

  // 声明子类的方法
  SmartPhone.prototype.photo = function () {
    console.log("我可以拍照");
  };

  SmartPhone.prototype.playGame = function () {
    console.log("我可以玩游戏");
  };

  const chuizi = new SmartPhone("锤子", 2499, "黑色", "5.5inch");

  console.log(chuizi);
  ```

- ES6

  ```js
  class Phone {
    constructor(brand, price) {
      this.brand = brand;
      this.price = price;
    }
    call() {
      console.log("我可以改变世界");
    }
  }
  
  class SmartPhone extends Phone {
    constructor(brand, price, color, size) {
      // super 调用父类构造方法
      super(brand, price);
      this.color = color;
      this.size = size;
    }
    game() {
      console.log("我可以打游戏");
    }
    photo() {
      console.log("我可以拍照");
    }
    // 覆盖父类方法
    call() {
      console.log("我可以视频通话");
    }
  }
  
  const huaWei = new SmartPhone("华为", 4999, "black", "5.5inch");
  huaWei.call(); // 我可以视频通话
  console.log(huaWei);
  ```

### class 的 get 和 set

```js
// get 和 set
class Phone {
  get price() {
    console.log("price被读取了");
  }

  set price(newValue) {
    console.log("price被修改了");
  }
}

// 实例化对象
const huaWei = new Phone();

console.log(huaWei.price);
huaWei.price = 3999;
```

## 17.数值扩展

1. `Number.EPSILON` 是 JavaScript 表示的`最小精度`

   EPSILON 属性的值接近于 2.220446049250313e-16

   ```js
   function equal(a, b) {
     // 如果两个数的误差小于最小精度，则认为两数相等
     if (Math.abs(a - b) < Number.EPSILON) {
       return true;
     } else {
       return false;
     }
   }
   console.log(0.1 + 0.2 === 0.3); // false
   console.log(equal(0.1 + 0.2, 0.3)); // true
   ```

2. 二进制和八进制

   ```js
   let b = 0b1010; // 二进制
   let o = 0o777; // 八进制
   let d = 100; // 十进制
   let x = 0xff; // 十六进制

   console.log(x); // 255
   ```

3. `Number.isFinite` 检测一个数值是否为有限数

   ```js
   console.log(Number.isFinite(100)); // true
   console.log(Number.isFinite(100 / 0)); // false
   console.log(Number.isFinite(Infinity)); // false
   ```

4. `Number.isNaN` 检测一个数值是否为 NaN(`严格判断`是否全等)

   ```js
   console.log(Number.isNaN(123)); // false
   // Number.isNaN 严格的判断传入的参数是否全等于NaN ('测试' === NaN)
   console.log(Number.isNaN("测试")); // false
   ```

5. `Number.parseInt Number.parseFloat` 字符串转整数

   ```js
   console.log(Number.parseInt("123")); // 123
   console.log(Number.parseInt("123abc")); // 123
   console.log(Number.parseInt("123.12abc")); // 123
   console.log(Number.parseInt("abc123.12abc")); // NaN
   
   console.log(Number.parseFloat("123.123")); // 123.123
   console.log(Number.parseFloat("123.12asd3")); // 123.12
   ```

6. `Number.isInteger` 判断一个数是否为整数
   ```js
   console.log(Number.isInteger(12)); // true
   console.log(Number.isInteger(12.12)); // false
   console.log(Number.isInteger("abc")); // false
   ```
7. `Math.trunc` 将数字的小数部分抹掉
   ```js
   console.log(Math.trunc(123.123)); // 123
   ```
8. `Math.sign` 判断一个数是正数 负数 还是 0
   ```js
   console.log(Math.sign(123)); // 1
   console.log(Math.sign(-123)); // -1
   console.log(Math.sign(0)); // 0
   ```

## 18.对象扩展

1. `Object.is` 判断两个值是否完全相等

   ```js
   console.log(Object.is(120, 110)); // false
   console.log(Object.is(120, 120)); // true
   console.log(Object.is(NaN, NaN)); // true
   console.log(NaN === NaN); // false
   ```

2. `Object.assign` 对象的合并

   ```js
   const config1 = {
     host: "localhost",
     port: 5000,
     name: "root",
     pass: "root",
     test: "test",
   };
   const config2 = {
     host: "http://atguigu.com",
     port: "8080",
     name: "atguigu.com",
     pass: "atguigu",
   };
   
   // config2 将 config1 中的内容覆盖
   console.log(Object.assign(config1, config2));
   ```

3. `Object.setPrototypeOf` 设置原型 `Object.getPrototypeOf`

   ```js
   const school = {
     name: "尚硅谷",
   };
   const cities = {
     xiaoqu: ["北京", "上海", "深圳"],
   };
   
   Object.setPrototypeOf(school, cities);
   console.log(Object.getPrototypeOf(school));
   console.log(school);
   ```

## 18.模块化

### 优势

1. 防止命名冲突
2. 代码复用
3. 高维护性

### ES6 之前的模块化规范：

1. CommonJS => NodeJS、Browserify
2. AMD => requireJS
3. CMD => seaJS

### ES6 模块化语法

模块功能主要由两个命令构成：`export` 和 `import`

- export 命令用于规定模块的对外接口
- import 命令用于输入其他模块提供的功能

### 暴露方式

- 分别暴露

  ```js
  export const school = "尚硅谷";

  export function teach() {
    console.log("我们可以交给你开发技能");
  }
  ```

- 统一暴露

  ```js
  let school = "尚硅谷";

  function teach() {
    console.log("我们可以帮助你找工作");
  }

  export { school, teach };
  ```

- 默认暴露

  ```js
  export default {
    school: "尚硅谷",
    change: function () {
      console.log("我可以改变世界");
    },
  };
  ```

### 引入方式

1. 在`<script>`中引入

   ```html
   <script type="module"></script>
   ```

   1. 通用导入方式

      ```js
      // 引入 m1.js 模块内容
      import * as m1 from "./src/m1.js";
      console.log(m1);

      // 引入 m2.js 模块内容
      import * as m2 from "./src/m2.js";
      console.log(m2);

      // 引入 m3.js 模块内容
      import * as m3 from "./src/m3.js";
      console.log(m3);
      ```

   2. 解构赋值形式

      ```js
      import { school, teach } from "./src/m1.js";
      console.log(school, teach);

      import { school as guigu, findJob } from "./src/m2.js";
      console.log(guigu, findJob);

      import { default as m3 } from "./src/m3.js";
      console.log(m3);
      ```

   3. 简便形式 针对`默认暴露`

      ```js
      import m3 from "./src/m3.js";
      console.log(m3);
      ```

2. 使用入口文件引入

   ```html
   <script src="./src/app.js" type="module"></script>
   ```

   ```js
   /* 入口文件 */
   
   // 模块引入
   import * as m1 from "./m1.js";
   import * as m2 from "./m2.js";
   import * as m3 from "./m3.js";
   console.log(m1);
   console.log(m2);
   console.log(m3);
   ```

### ES6 转换为 ES5

1. 初始化

   ```powershell
   npm init --yes
   ```

2. 引入依赖

   ```powershell
   npm i babel-cli babel-preset-env browserify -D
   ```

   `i`：局部安装  
   `-D`：开发依赖

3. 转换

   ```powershell
   // 局部安装使用npx
   npx babel 源文件目录 -d 目标文件夹 --presets=babel-preset-env

   npx babel src/js -d dist/js --presets=babel-preset-env
   ```

   `--presets=babel-preset-env`：预设

4. 打包

   ```powershell
   npx browserify 源文件 -o 目标文件
   
   npx browserify 17_模块化/dist/js/app.js -o 17_模块化/dist/bundle.js
   ```

# ES7 新特性

## `includes` 检测数组中是否存在

```js
const mingzhu = ["西游记", "红楼梦", "三国演义", "水浒传"];

// 判断
console.log(mingzhu.includes("西游记")); // true
console.log(mingzhu.includes("金瓶梅")); // false
```

## `**` 乘方

```js
console.log(2 ** 10); // 1024
console.log(Math.pow(2, 10)); // 1024
```

# ES8 新特性

## async 函数

- 返回的结果如果不是一个 Promise 类型的对象，返回值就是`成功`

  ```js
  async function fn() {
    return "尚硅谷";
  }

  const result = fn();
  console.log(result); // promise函数 {<fulfilled>: '尚硅谷'}
  ```

- 抛出错误，返回的结果是一个`失败`的 Promise

  ```js
  async function fn() {
    throw new Error("出错了");
  }

  const result = fn();
  console.log(result); // promise函数 {<rejected>: '出错了'}
  ```

- 返回的结果如果是一个 `Promise` 对象

  ```js
  async function fn() {
    return new Promise((resolve, reject) => {
      // resolve('成功的数据');
      reject("失败的数据");
    });
  }
  
  const result = fn();
  // 调用 then
  result.then(
    (value) => {
      console.log(value); // {<fulfilled>: '成功的数据'}
    },
    (reason) => {
      console.warn(reason); // {<rejected>: '失败的数据'}
    }
  );
  ```

## await 表达式

### 1.await 基本语法

```js
// 创建 Promise 对象
const p = new Promise((resolve, reject) => {
  // resolve('用户数据');
  reject("失败了");
});

// await 要放在 async 函数中
// await 后跟 Promise 函数
// 通过 try-catch 捕获 reject
async function main() {
  try {
    let result = await p;
    console.log(result); // 用户数据
  } catch (e) {
    console.log(e); // 失败了
  }
}

main();
```

### 2.async 与 await 结合读取文件

```js
// 1. 引入 fs 模块
const fs = require("fs");

// 读取为学
function readWeixue() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      fs.readFile("../resources/为学.txt", (err, data) => {
        if (err) reject(err);
        resolve(data);
      });
    }, 3000);
  });
}

// 读取悯农
function readMinnong() {
  return new Promise((resolve, reject) => {
    fs.readFile("../resources/悯农.txt", (err, data) => {
      if (err) reject(err);
      resolve(data);
    });
  });
}

// 读取插秧诗
function readChayangshi() {
  return new Promise((resolve, reject) => {
    fs.readFile("../resources/插秧诗.txt", (err, data) => {
      if (err) reject(err);
      resolve(data);
    });
  });
}

// 声明一个 async 函数
async function main() {
  let weixue = await readWeixue(); // 方法返回才会执行下一个

  let minnong = await readMinnong();

  let chayangshi = await readChayangshi();

  console.log(weixue.toString());
  console.log(minnong.toString());
  console.log(chayangshi.toString());
}

main();
```

### 3.async 与 await 结合发送 AJAX 请求

```js
// 发送 AJAX 请求
function sendAJAX(url) {
  return new Promise((resolve, reject) => {
    // 1.创建对象
    const xhr = new XMLHttpRequest();

    // 2. 初始化
    xhr.open("get", url);

    // 3. 发送
    xhr.send();

    // 4. 事件绑定
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200 && xhr.status < 300) {
          resolve(xhr.response);
        } else {
          reject(xhr.status);
        }
      }
    };
  });
}

/* // promise then方法测试
sendAJAX('https://api.apiopen.top/getJoke').then(value => {
  console.log(value)
}, reason => { }) */

// async 与 await 测试
async function main() {
  let result = await sendAJAX("https://api.apiopen.top/getJoke");
  console.log(result);

  let tianqi = await sendAJAX(
    "https://tianqiapi.com/api/?version=v1&city=深圳&appid=23941491&appsecret=TXoD5e8P"
  );
  console.log(tianqi);

  let result2 = await sendAJAX(
    "https://v0.yiketianqi.com/aqi/rankcity?appid=23941491&appsecret=TXoD5e8P"
  );
  console.log(result2);
}
main();
```

## 对象方法扩展

- 获取对象所有的键 `Object.keys()`

  ```js
  const school = {
    name: "尚硅谷",
    cities: ["北京", "上海", "深圳"],
    xueke: ["前段", "Vue", "Axios", "Java"],
  };

  // 获取对象所有的键
  console.log(Object.keys(school)); // ["name","cities","xueke"]
  ```

- 获取对象所有的值 `Object.values()`

  ```js
  const school = {
    name: "尚硅谷",
    cities: ["北京", "上海", "深圳"],
    xueke: ["前端", "Vue", "Axios", "Java"],
  };

  // 获取对象所有的值
  console.log(Object.values(school)); // ['尚硅谷', ['北京', '上海', '深圳'], ['前端', 'Vue', 'Axios', 'Java']]
  ```

- 将对象转换为键值对数组 `Object.entries()`

  ```js
  const school = {
    name: "尚硅谷",
    cities: ["北京", "上海", "深圳"],
    xueke: ["前段", "Vue", "Axios", "Java"],
  };

  // entries 将对象转换为键值对数组
  console.log(Object.entries(school)); // [['name', '尚硅谷'], ['cities', Array(3)], ['xueke', Array(4)]]
  // 创建 Map
  const m = new Map(Object.entries(school)); // {'name' => '尚硅谷', 'cities' => Array(3), 'xueke' => Array(4)}
  console.log(m);
  ```

- 返回对象属性的描述对象 `Object.getOwnPropertyDescriptors()`

  ```js
  const school = {
    name: "尚硅谷",
    cities: ["北京", "上海", "深圳"],
    xueke: ["前段", "Vue", "Axios", "Java"],
  };
  
  // 对象属性的描述对象
  console.log(Object.getOwnPropertyDescriptors(school));
  ```

# ES9 新特性

## 对象展开

- rest 参数

  > Rest 参数与 spread 扩展运算符在 ES6 中已经引入，不过 ES6 中只针对于数组，在 ES9 中对象提供了像数组一样的 rest 参数和扩展运算符

  ```js
  function connect({ host, port, ...user }) {
    console.log(host); // localhost
    console.log(port); // 3000
    console.log(user); // {userName: 'root', password: 'root', type: 'master'}
  }

  connect({
    host: "localhost",
    port: 3000,
    userName: "root",
    password: "root",
    type: "master",
  });
  ```

- 对象合并

  ```js
  const skillOne = {
    q: "天音波",
  };
  
  const skillTwo = {
    w: "金钟罩",
  };
  
  const skillThree = {
    e: "天龙破",
  };
  
  const skillFour = {
    r: "猛龙摆尾",
  };
  
  console.log({ ...skillOne, ...skillTwo, ...skillThree, ...skillFour }); // {q: '天音波', w: '金钟罩', e: '天龙破', r: '猛龙摆尾'}
  ```

## 正则扩展

### 命名捕获分组

- 匿名捕获分组 `()`

    ```js
    // 声明一个字符串
    let str = '<a href="http://www.atguigu.com">尚硅谷</a>';

    // 提取URL与标签文本
    const reg = /<a href="(.*)">(.*).<\/a>/;

    const result = reg.exec(str);
    console.log(result[1]); // http://www.atguigu.com
    console.log(result[2]); // 尚硅谷
    ```

- 命名捕获分组 `?<url>`

  ```js
  // 声明一个字符串
  let str = '<a href="http://www.atguigu.com">尚硅谷</a>';
  
  // 提取URL与标签文本
  const reg = /<a href="(?<url>.*)">(?<text>.*)<\/a>/;
  
  const result = reg.exec(str);
  console.log(result.groups.url); // http://www.atguigu.com
  console.log(result.groups.text); // 尚硅谷
  ```

## 反向断言

- 正向断言

  ```js
  // 声明字符串
  let str = "5211214你知道吗555啦啦啦";

  // 正向断言
  const reg = /\d+(?=啦)/;

  const result = reg.exec(str);
  console.log(result[0]); // 555
  ```

- 反向断言

  ```js
  // 声明字符串
  let str = "5211214你知道吗555啦啦啦";
  
  // 反向断言
  const reg = /(?<=吗)\d+/;
  
  const result = reg.exec(str);
  console.log(result); // 555
  ```

## dotAll 模式

- 普通模式 `.`匹配除换行字符以外的任意单个字符

  ```js
  // dot . 元字符 匹配除换行字符以外的任意单个字符
  let str = `
      <ul>
        <li>
          <a>肖申克的救赎</a>  
          <p>上映日期：1994-09-10</p>
        </li>
        <li>
          <a>阿甘正传</a>  
          <p>上映日期：1994-07-06</p>
        </li>
      </ul>
    `;
  // 声明正则
  const reg = /<li>\s+<a>(.*?)<\/a>\s+<p>(.*?)<\/p>/
  
  const result = reg.exec(str);
  console.log(result[1]); // 肖申克的救赎
  console.log(result[2]); // 上映日期：1994-09-10
  ```

- dotAll 模式 `s`  `.`匹配任意字符

  ```js
  let str = `
      <ul>
        <li>
          <a>肖申克的救赎</a>  
          <p>上映日期：1994-09-10</p>
        </li>
        <li>
          <a>阿甘正传</a>  
          <p>上映日期：1994-07-06</p>
        </li>
      </ul>
    `;
  // 声明正则
  const reg = /<li>.*?<a>(.*?)<\/a>.*?<p>(.*?)<\/p>/gs;
  
  let result;
  let data = [];
  
  while ((result = reg.exec(str))) {
    data.push({ title: result[1], time: result[2] });
  }
  console.log(data);
  ```

# ES10 新特性

## 对象方法扩展

### `Object.fromEntries`

- 二维数组 转为 对象
  ```js
  const result = Object.fromEntries([
    ["name", "尚硅谷"],
    ["xueke", "Java", "Vue"],
  ]);
  console.log(result); // {name: '尚硅谷', xueke: 'Java'} "Vue"被抛弃
  ```
- Map 转为 对象

  ```js
  const m = new Map();
  m.set("name", "ATGUIGU");
  
  const result = Object.fromEntries(m);
  console.log(result); // { name: 'ATGUIGU' }
  ```

## 字符串方法扩展

### `trimStart` 与 `trimEnd`

```js
// trim
let str = "  iloveyou   ";

console.log(str); //   iloveyou   
console.log(str.trimStart()); // iloveyou     去除头部空格
console.log(str.trimEnd()); //   iloveyou 去除尾部空格
```

## 数组方法扩展

### `flat` 将多维数组转化为低维数组

```js
// 将多维数组转化为低维数组（默认降一维）
const arr = [1, 2, 3, 4, [5, 6, [7, 8]]];
console.log(arr.flat()); // [1, 2, 3, 4, 5, 6, [7, 8]]

// 参数为深度
console.log(arr.flat(2)); // [1, 2, 3, 4, 5, 6, 7, 8]
```

### `flatMap` 相当于 `map + flat`

```js
const arr = [1, 2, 3, 4];
const result = arr.map((item) => [item * 10]);
console.log(result); // [[10], [20], [30], [40]]

const result2 = arr.flatMap((item) => [item * 10]);
console.log(result2); // [10, 20, 30, 40]
```

## Symbol 扩展

### `Symbol.prototype.description` 获取 Symbol 描述字符串

```js
// 创建 Symbol
let s = Symbol("尚硅谷");

// 获取 Symbol 描述字符串
console.log(s.description); // 尚硅谷
```

# ES11 新特性

## 私有属性

> 私有属性只能在 class 里访问

```js
class Person {
  // 公有属性
  name;
  // 私有属性
  #age;
  #weight;
  // 构造方法
  constructor(name, age, weight) {
    this.name = name;
    this.#age = age;
    this.#weight = weight;
  }
  showMsg() {
    console.log(this.name);
    console.log(this.#age);
    console.log(this.#weight);
  }
}

const girl = new Person("小红", 18, "165");

console.log(girl); // {name: '小红', #age: 18, #weight: '165'}
console.log(girl.name); // 小红

console.log(girl.#age); // 报错 私有属性只能在class里访问

girl.showMsg();
```

## Promise 扩展

- `Promise.allSettled()` 返回的状态`总是成功`的，返回值为传入 Promise 对象的结果

  ```js
  // 声明一个Promise对象
  const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("商品数据-1");
    }, 1000);
  });

  const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("商品数据-2");
    }, 1000);
  });

  const p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("失败了");
    }, 1000);
  });

  // Promise.allSettled() 返回的状态总是成功的，返回值为传入 Promise 对象的结果
  const result = Promise.allSettled([p1, p2]);
  console.log(result); // Promise {<fulfilled>: [ {status: 'fulfilled', value: '商品数据-1'}, {status: 'fulfilled', value: '商品数据-2'} ]}

  const result2 = Promise.allSettled([p1, p3]);
  console.log(result2); // Promise {<fulfilled>: [ {status: 'fulfilled', value: '商品数据-1'}, {status: 'rejected', reason: '失败了'} ]}
  ```

- `Promise.all()` 返回值 `一假便假` 值为失败 Promise 对象的值

  ```js
  // 声明一个Promise对象
  const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("商品数据-1");
    }, 1000);
  });
  
  const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("失败了");
    }, 1000);
  });
  
  // Promise.all() 返回值 一假便假 值为失败Promise对象的值
  const result = Promise.all([p1, p2]);
  console.log(result); // {<rejected>: 失败了}
  ```

## 字符串扩展

- `matchAll` 批量提取数据

  ```js
  let str = `
      <ul>
        <li>
          <a>肖申克的救赎</a>
          <p>上映日期：1994-09-10</p>
        </li>
        <li>
          <a>阿甘正传</a>
          <p>上映日期：1994-07-06</p>
        </li>
      </ul>
    `;
  
  // 声明正则
  const reg = /<li>.*?<a>(.*?)<\/a>.*?<p>(.*?)<\/p>/gs;
  const result = str.matchAll(reg);
  
  /* for (v of result) {
    console.log(v[1]); // 肖申克的救赎            阿甘正传
    console.log(v[2]); // 上映日期：1994-09-10   上映日期：1994-07-06
  } */
  
  const res = [...result];
  console.log(res); // [Array(3), Array(3)]
  ```

## 可选链操作符

```js
function main(config) {
  // 需要层层判断 否则如果不传参数会报错
  const dbHost = config && config.db && config.db.host;

  console.log(dbHost); // localhost
}

main({
  db: {
    host: "localhost",
    username: "root",
  },
  catch: {
    host: "localhost",
    username: "root",
  },
});
```

- `?.` 可选链操作符 - 判断`前一个参数是否存在`

  ```js
  function main(config) {
    const dbHost = config?.db?.host;
  
    console.log(dbHost); // localhost
  }
  
  main({
    db: {
      host: "localhost",
      username: "root",
    },
    catch: {
      host: "localhost",
      username: "root",
    },
  });
  ```

## 动态 import

- 全局引入

  ```js
  import * as m1 from "./hello.js";

  const btn = document.getElementById("btn");

  btn.onclick = function () {
    m1.showHello();
  };
  ```

- 动态引入 - 提升加载效率

  ```js
  const btn = document.getElementById("btn");
  
  btn.onclick = function () {
    import("./hello.js").then((module) => {
      module.showHello();
    });
  };
  ```

## `BigInt` 大整型

- 大整形

  ```js
  let n = 521n;
  console.log(n); // 521n
  ```

- 函数

  ```js
  let n = 123;
  console.log(n); // 123
  console.log(BigInt(n)); // 123n
  ```

- 大数值运算

  ```js
  let max = Number.MAX_SAFE_INTEGER;
  console.log(max); // 9007199254740991
  console.log(max + 1); // 9007199254740992
  console.log(max + 2); // 9007199254740992
  
  console.log(BigInt(max)); // 9007199254741n
  console.log(BigInt(max) + BigInt(1)); // 9007199254742n
  console.log(BigInt(max) + BigInt(2)); // 9007199254743n
  ```

## `globalThis` 绝对全局对象

> globalThis 始终指向 Window

```js
console.log(globalThis); // Window对象
```
