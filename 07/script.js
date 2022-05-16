"use strict";

const servants = ["犬", "猿", "雉"];

function appendServants(newcomer1, newcomer2) {
  servants.push(newcomer1);
  servants.push(newcomer2);

  console.log("現在の家来は：");
  for (const servant of servants) {
    console.log(servant);
  }
  console.log(`の総勢${servants.length}名です。`);
}

appendServants("赤鬼", "青鬼");
appendServants("桃", "栗");
appendServants("爺", "婆");
