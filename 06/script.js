"use strict";

const evList = [
  { name: "サンダース", type: "でんき", weight: 24.5, ability: "ちくでん" },
  { name: "ブースター", type: "ほのお", weight: 25.0, ability: "もらいび" },
  { name: "エーフィ", type: "エスパー", weight: 26.5, ability: "シンクロ" },
  { name: "ブラッキー", type: "あく", weight: 27.0, ability: "シンクロ" },
  { name: "リーフィア", type: "くさ", weight: 25.5, ability: "リーフガード" },
  {
    name: "ニンフィア",
    type: "フェアリー",
    weight: 23.5,
    ability: "メロメロボディ",
  },
  { name: "グレイシア", type: "こおり", weight: 25.9, ability: "ゆきがくれ" },
  { name: "シャワーズ", type: "みず", weight: 29.0, ability: "ちょすい" },
];

for (const ev of evList) {
  console.log(`${ev.name}のタイプは${ev.type}です`);
}
