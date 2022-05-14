"use strict";

const obj = { a: "A", b: "B", c: "C" };

for (const [prop, val] of Object.entries(obj)) {
  console.log(prop);
  console.log(val);
}
