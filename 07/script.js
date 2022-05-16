"use strict";

const servants = ["犬", "猿", "雉"];

function showServants() {
  console.log("現在の家来は：");
  for (const servant of servants) {
    console.log(servant);
  }
  console.log(`の総勢${servants.length}名です。`);
}

showServants();

servants.push("鬼");
showServants();

servants.push("桃");
showServants();
