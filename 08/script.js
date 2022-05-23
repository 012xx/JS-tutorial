"use strict";

const ul = document.getElementById("list"); // 親要素 → ul

const li3 = ul.lastElementChild; // 最後の子要素 → li3
console.log(li3.textContent); // → M … Model

const li2 = li3.previousElementSibling; // li3の前の兄弟要素 → li2
console.log(li2.textContent); // → O … Object

const li1 = li2.previousElementSibling; // li2の前の兄弟要素 → li1
console.log(li1.textContent); // → D … Document
