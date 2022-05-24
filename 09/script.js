"use strict";

// ダイアログからの入力によってスタイルを変える
const flag = window.prompt("A, B, or C");

p.className = "baseStyle";

if (flag == "A") {
  p.className += "p_class";
} else if (flag == "B") {
  p.className += "myStyle";
}
