"use strict";

const p = document.getElementById("p_id");

// baseStyleクラスがclassListに含まれていなければ追加する
if (p.classList.contains("baseStyle") == false) {
  p.classList.add("baseStyle");
}
