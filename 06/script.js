"use strict";

const profile = {
  name: "OJK",
  bloodType: "A",
  servants: ["犬", "猿", "雉"],
  style: { height: 165, weight: 52, waist: 76 },
};

console.log(profile.servants[2]);
console.log(profile.style.height);

// profile.servantsは単なる配列
for (const servant of profile.servants) {
  console.log(`家来：${servant}`);
}

// profile.styleは単なるオブジェクト
const myStyle = profile.style;
for (const prop in myStyle) {
  console.log(`${prop} is ${myStyle[prop]}`);
}

// Object.entriesを使ってfor-of文で書く
for (const [prop, val] of Object.entries(profile)) {
  if (prop == "name" || prop == "bloodType") {
    console.log(`${prop}は${val}です`);
  }
}
