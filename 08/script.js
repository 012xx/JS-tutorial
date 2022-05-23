"use strict";

const ul = document.getElementById("list");

const li1 = ul.firstElementChild; // 1番目の要素
const li2 = li1.nextElementSibling; // 2番目の要素
const li3 = li2.nextElementSibling; // 3番目の要素

ul.insertBefore(li3, li2);
