"use strict";

const button = document.querySelector("button");
console.log(button); // → <button>ボタン</button>

// ボタンをクリックするとクラスが切り替わるように

button.addEventListener("click", () => {
  const p = document.getElementById("target");
  p.classList.toggle("myStyle");
});

button.addEventListener("click", () => {
  const p = document.getElementById("target");
  p.classList.toggle("newStyle");
});

button.addEventListener("mouseenter", () => {
  const p = document.getElementById("target");
  p.style.fontSize = "1.5em";
});

button.addEventListener("mouseleave", () => {
  const p = document.getElementById("target");
  p.style.fontSize = "1em";
});

// img 要素をクリックすると画像を切り替えるように
const img = document.querySelector("img");

img.addEventListener("click", (e) => {
  // ブラウザー座標系でのクリック位置
  console.log(e.clientX, e.clientY);
});
