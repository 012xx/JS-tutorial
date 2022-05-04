"use strict";

const array = [1, 2, 3, 4, 5];

// const newArray = array.filter((el) => el > 3);
// console.log(newArray);

// 同じ処理をfor-of文で書くと
const newArray2 = [];
for (const el of array) {
  if (el > 3) {
    newArray2.push(el);
  }
}
console.log(newArray2);
