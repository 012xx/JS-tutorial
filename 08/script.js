"use strict";

const ul = document.getElementById("list"); // 親要素 ul
const newLi = document.createElement("li"); // li要素を作成
newLi.textContent = "DOM!!";

ul.appendChild(newLi); // ul要素の最後にliエレメントを追加
