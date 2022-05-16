"use strict";

const servants = ["犬", "猿", "雉"];

console.log("現在の家来は：");
for (const servant of servants) {
  console.log(servant);
}
console.log(`の総勢${servants.length}名です。`);

// 「鬼」を配列の末尾に追加
servants.push("鬼");

console.log("現在の家来は：");
for (const servant of servants) {
  console.log(servant);
}
console.log(`の総勢${servants.length}名です。`);

// 「桃」を配列の末尾に追加
servants.push("桃");

console.log("現在の家来は：");
for (const servant of servants) {
  console.log(servant);
}
console.log(`の総勢${servants.length}名です。`);
