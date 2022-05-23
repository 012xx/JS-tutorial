"use strict";

const ul = document.getElementById("list");
const li1 = ul.firstChild; // 1番目の子要素
const li2 = li1.nextSibling; // 2番目の子要素

ul.remove(li1);
li2.remove();

const removedLi1 = ul.removeChild(li1);

removedLi1.textContent = "Remoooved!!"; // 削除されてもまだ使える
document.body.appendChild(removedLi1); // 再利用
