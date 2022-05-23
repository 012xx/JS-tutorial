"use strict";

// ① a要素とimg要素のエレメントを取得
// 定数a : getElementByIdでリンクを取得
const a = document.getElementById("link");
// 定数img : aの最初の子要素を取得
const img = a.firstElementChild;

// ② 属性値を書き換えることもできる
// 元のリンクURLを表示
console.log(`元のリンクURL:${a.href}`);
// リンクを'https://loremflickr.com/320/240/dog'に変更する
a.href = "https://loremflickr.com/320/240/dog";

// ③だから、画像を書き換えることもできる
// 元の画像ソースを表示
console.log(`元の画像ソース:${img.href}`);
// 画像も同様に書き換える
img.src = "https://loremflickr.com/320/240/dog";
