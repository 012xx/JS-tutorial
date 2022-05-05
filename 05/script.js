"use strict";
// list : 引っ張ってきたul
// numList : 数字が入っている配列
// li : 新しく生成したli要素
// filterlist : No+偶数のリスト
// even : filterlistを1つ1つ切り出したもの

// ulを持ってくる
const list = document.querySelector("ul");

// 配列の作成
const numList = [1, 2, 3, 4, 5, 6, 7, 8];

// 新しく配列を作成する
const filteredlist = numList
  .filter((num) => num % 2 === 0)
  .map((num) => `No.${num}`);

// コンソールに表示する
console.log(filteredlist);

// for-of文でひとつずつ表示させる
for (const even of filteredlist) {
  // li要素を作成する
  const li = document.createElement("li");
  // liの要素の中に中身を入れる
  li.textContent = even;
  // ブラウザで表示
  list.appendChild(li);
}
