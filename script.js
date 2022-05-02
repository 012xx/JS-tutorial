"use strict";

// index.htmlからmainを引っ張ってくる
// p要素の作成→代入
// ブラウザに表示

const element = document.getElementById("top");
console.log(element);
const p_text = document.createElement("p");
p_text.textContent = "Hello World!!";
console.log(p_text);

document.main.appendChild(p_text);
