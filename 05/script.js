"use strict";

const list = document.querySelector("ul");

const Etolist = ["ネズミ", "ウシ", "トラ", "ウサギ"];
for (const eto of Etolist) {
  const li = document.createElement("li");
  li.textContent = eto;
  list.appendChild(li);
}
