"use strict";

const servants = ["犬", "猿", "雉"];

function appendServants(newcomer) {
  servants.push(newcomer);

  console.log("現在の家来は：");
  for (const servant of servants) {
    console.log(servant);
  }
  console.log(`の総勢${servants.length}名です。`);
}

appendServants("鬼");
appendServants("桃");
appendServants("爺");
