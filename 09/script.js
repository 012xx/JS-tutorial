"use strict";

const p = document.getElementById("p_id");

if (p.classList.contains("p_class") == true) {
  p.classList.replace("p_class", "baseStyle myStyle");
}
