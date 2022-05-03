"use strict";

// index.htmlからmainを引っ張ってくる
const element = document.getElementById("top");
console.log(element);

// p要素の作成→代入
const p_text = document.createElement("p");
p_text.textContent = "Hello World!!";
console.log(p_text);

// ブラウザに表示
element.appendChild(p_text);
