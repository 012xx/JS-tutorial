"use strict";

// class属性が設定されていない2番目のp要素を取得
const p = document.querySelectorAll("p")[1];
console.log(p.className); // → 何も表示されない

p.className = "new_class"; // class属性を追加
