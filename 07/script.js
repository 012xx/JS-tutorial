"use strict";

const obj = {
  name: "OJK",
  sayHello() {
    console.log(`Hello ${this.name}!!`);
  },
  sayHelloTwice() {
    this.sayHello();
    this.sayHello();
  },
};

obj.sayHello(); // → Hello OJK!!

obj.name = "桃太郎";
obj.sayHelloTwice(); // → Hello 桃太郎!! Hello 桃太郎!!
