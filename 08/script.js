"use strict";

const ul = document.getElementById("list"); // 親要素 → ul

for (let li = ul.firstElementChild; li != null; li = li.nextElementSibling) {
  console.log(li.textContent);
}
