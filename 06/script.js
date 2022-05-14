"use strict";

const obj = { a: "A", b: "B", c: "C" };

// プロパティ名 a を直接指定する
// console.log(obj.a); // → A (ドット記法)
// console.log(obj["a"]); // → A (ブラケット記法)

// プロパティ名 a を定数に代入してから指定する
// const prop = "a";
// console.log(obj.prop); // → undefined
// console.log(obj[prop]); // → A

// for (const el of obj) {
//   console.log(el);
// }

for (const prop in obj) {
  console.log(prop);
  console.log(obj[prop]);
}
