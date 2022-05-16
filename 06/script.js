"use strict";

// リストを定数で宣言する
const evList = [
  { name: "サンダース", type: "でんき", weight: 24.5, abilities: "ちくでん" },
  { name: "ブースター", type: "ほのお", weight: 25.0, abilities: "もらいび" },
  { name: "エーフィ", type: "エスパー", weight: 26.5, abilities: "シンクロ" },
  { name: "ブラッキー", type: "あく", weight: 27.0, abilities: "シンクロ" },
  { name: "リーフィア", type: "くさ", weight: 25.5, abilities: "リーフガード" },
  {
    name: "ニンフィア",
    type: "フェアリー",
    weight: 23.5,
    abilities: "メロメロボディ",
  },
  { name: "グレイシア", type: "こおり", weight: 25.9, abilities: "ゆがくれ" },
  { name: "シャワーズ", type: "みず", weight: 29.0, abilities: "ちょすい" },
];

// table要素をHTMLから抜き出す
const table = document.querySelector("table");
// tr要素を新規作成する
const tr = document.createElement("tr");
// headerという定数リストを作成する
const header = ["名前", "タイプ", "体重", "特技"];

// headerをfor文で回すために定数hを宣言する
for (const h of header) {
  // th要素を新規作成する
  const th = document.createElement("th");
  console.log(h);
  // headerのリスト要素をテキストに挿入する
  // ("名前", "タイプ", "体重", "特技")
  th.textContent = h;
  // trの要素の下にthを挿入する
  tr.appendChild(th);
}
// tableの要素の下にtrを挿入する
table.appendChild(tr);

// evListをevで回す
for (const ev of evList) {
  // tr要素を新規作成する("サンダース"、"でんき"…)
  const tr = document.createElement("tr");
  //
  for (const prop in ev) {
    console.log(prop);
    // tdリストを新規作成する
    const td = document.createElement("td");
    // evListの中身をtdに挿入する
    td.textContent = ev[prop];
    // もし、weightだった場合はtd末尾に"kg"をつける
    if (prop == "weight") {
      td.textContent += " kg";
    }
    // trの要素の下にtdを挿入する
    tr.appendChild(td);
  }
  // tableの要素の下にtrを挿入する
  table.appendChild(tr);
}
