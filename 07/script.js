"use strict";

const servants = ["犬", "猿", "雉"];

function swapServants(newcomer) {
  servants.push(newcomer);
  const fired = servants.shift(); // 先頭要素を削除

  console.log("現在の家来は：");
  for (const servant of servants) {
    console.log(servant);
  }
  console.log(`の総勢${servants.length}名です。`);

  return fired;
}

console.log(`${swapServants("鬼")}さん、これまでありがとう！`);
console.log(`${swapServants("桃")}さん、これまでありがとう！`);
