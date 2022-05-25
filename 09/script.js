"use strict";

const p = document.getElementById("p_id");
console.log(p.classList);
// → DOMTokenList ["p_class", value: "p_class"]

p.className = "baseStyle"; // classNameプロパティも併用できる

const flag = window.prompt("A,B, or C");

if (flag == "A") {
  p.classList.add("p_class"); // p_classを追加
} else if (flag == "B") {
  p.classList.add("myStyle"); // myStyleを追加
}
