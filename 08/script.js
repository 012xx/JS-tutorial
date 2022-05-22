"use strict";

const lis = document.getElementsByTagName("li");
console.log(lis); // → HTMLCollection(3) [li, li, li]

for (const li of lis) {
  console.log(li.textContent);
}

const lisArray = Array.from(lis);
lisArray.forEach((li) => (li.textContent = "DOM!!"));
