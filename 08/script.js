"use strict";

const ul = document.getElementById("list");
const newLi = document.createElement("li");
newLi.textContent = "DOM!!";

const li1 = ul.firstElementChild; // ul要素の先頭の子要素

ul.insertBefore(newLi, li1); // ul要素の先頭の子要素の手前に挿入
