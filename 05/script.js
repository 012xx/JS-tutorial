"use strict";

const array = [1, 2, 3];

// const newArray = array.map((el) => el + "号");
// console.log(newArray); // [1号,2号,3号]

// 同じ処理をfor - of文で書くと;
const newArray2 = [];
for (const el of array) {
  console.log(el);
  newArray2.push(el + "号");
}
console.log(newArray2);
