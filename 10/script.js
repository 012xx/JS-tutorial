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

img.addEventListener("click", (e) => {
  const p = document.createElement("p"); // p要素を生成

  // 要素座標系でのクリック位置
  p.textContent = `X:${e.offsetX} Y:${e.offsetY}`;

  // 親要素はbody要素、img要素の下に挿入
  // img 要素の下にエレメントを追加するために insertBefore メソッド を呼び出す
  // nextElementSibling → 次(要素の後ろ)に追加する
  document.body.insertBefore(p, img.nextElementSibling);
});

// ※ 下に行くほど広い範囲の座標系
// 要素座標系 ： offsetX／offsetY
// ブラウザー座標系： clientX／clientY(ブラウザーからはみ出して見えない部分も含めたウェブページの左上角を原点とする座標系)
// スクリーン座標系： screenX／screenY(PC の画面のこと)
// ページ座標系：pageX／pageY

window.addEventListener("resize", () => {
  const p = document.getElementById("target");
  p.style.backgroundColor = "gold";
});

// a要素の作成
const a = document.createElement("a");
a.href = "https://zenn.dev/ojk";
a.textContent = "リンク先に飛びます";

// script要素の上に追加
const script = document.querySelector("script");
document.body.insertBefore(a, script);
