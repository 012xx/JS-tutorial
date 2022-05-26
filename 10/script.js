"use strict";

const button = document.querySelector("button");
console.log(button); // → <button>ボタン</button>

button.addEventListener("click", () => {
  const p = document.getElementById("target");
  p.classList.toggle("myStyle");
});

button.addEventListener("click", () => {
  const p = document.getElementById("target");
  p.classList.toggle("newStyle");
});
