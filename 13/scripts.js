"use strict";

const input = document.querySelector("input"); // input要素
const output = document.getElementById("output"); // div#output要素
const submit = document.getElementById("submit"); // button#submit要素

// ［記録］ボタンを押したら…
submit.addEventListener("click", () => {
  output.textContent = input.value; // div要素に表示
});
