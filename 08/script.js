"use strict";

const lis = document.querySelectorAll("li");

for (const li of lis) {
  console.log(li.textContent);
  li.textContent = "DOM!!"; // HTMLが書き変わる
}
