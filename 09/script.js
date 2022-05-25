"use strict";

const p = document.getElementById("p_id");

if (p.classList.contains("p_class") == true) {
  p.classList.remove("p_class"); // 削除
  p.classList.add("baseStyle", "myStyle"); // 追加
}
