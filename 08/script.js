"use strict";

const ul = document.getElementById("list");
const li1 = ul.firstElementChild; // 1番目の子要素
const newLi = document.createElement("li"); // 新しいli要素
newLi.textContent = "DOM!!";

ul.replaceChild(newLi, li1); // 1番目の子要素と新しい要素を置換
