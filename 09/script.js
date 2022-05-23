"use strict";

const a = document.getElementById("link");

const attrs = a.attributes; // → 属性一覧を取得

// for-ofが使える
for (const attr of attrs) {
  console.log(attr); // → id="link" → ...
}
