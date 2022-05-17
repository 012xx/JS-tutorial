"use strict";

function getArray() {
  return ["A", "B", "C"]; // 配列を返す
}
const array = getArray();
console.log(array[1]); // → B

// オブジェクトを戻り値とする関数
function getObject() {
  return { a: "A", b: "B", c: "C" }; // 戻り値を返す
}
const obj = getObject();
console.log(obj.a); // →A
