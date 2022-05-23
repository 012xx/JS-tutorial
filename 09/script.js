"use strict";

const a = document.getElementById("link");

const attrs = a.attributes; // → 属性一覧を取得

console.log(attrs.href.name); // → href
console.log(attrs.href.value); // → "https://zenn.dev/ojk"

// value(属性値)の方は書き換えも可能
attrs.href.value = "https://loremflickr.com/320/240/dog";
console.log(attrs.href.value);
