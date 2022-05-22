"use strict";

const lis = document.querySelectorAll("li");

const lisArray = Array.from(lis); // NodeListを配列に変換
const newLis = lisArray.map((li) => li.textContent + "!!");

// 配列を順に表示する
for (let i in newLis) {
  console.log(newLis[i]);
}
