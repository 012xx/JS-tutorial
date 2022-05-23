"use strict";

const ul = document.getElementById("list"); // 親要素 → ul

const li1 = ul.firstElementChild; //  最初の親要素 → li1
console.log(li1.textContent); // → D … Document

const li2 = li1.nextElementSibling; // li1の次の兄弟要素 → li2
console.log(li2.textContent); // → O … Object

const li3 = li2.nextElementSibling; // li2の次の兄弟要素 → li3
console.log(li3.textContent); // → M … Model
