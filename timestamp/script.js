// var ts = "2011-10-14 00:00:00";
// print(Date.parse(ts.replace(/-/g, "/")) / 1000);
//結果 1318518000

const birthday = window.prompt("誕生日を入力 例) 2001-04-01");

const date = new Date(birthday);

const timestamp = date.getTime();
const postTime = timestamp + 10800000;
console.log(timestamp);

console.log("結果を表示します");
console.log(`あなたの誕生日は：${birthday}`);
console.log(`timestamp型に変換すると：${timestamp}`);
console.log(`投稿時間は：${postTime}`);
