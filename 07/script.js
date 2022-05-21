"use strict";

const sayHello = function (who) {
  return `Hello ${who}!!`;
};

const msg = sayHello("World"); // 関数呼び出し
console.log(msg); // → Hello World!!
