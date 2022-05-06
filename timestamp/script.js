// 01.誕生日の入力(例：04-17)
// 02.現在のtimestampを取得
// 03. 現在の年を取得し、2022-を1で取得した入力値の頭につける
// 04.3でできたやつをtimestampにする
// 05.4のtimestampと2のtimestampを比較して、4の方が大きくなるまで3の年を+1していく

const birthday = window.prompt("誕生日を入力 例) 2001-04-01");

const date = new Date(birthday);

const timestamp = date.getTime();
const postTime = timestamp / 1000 + 10800;
console.log(timestamp);

console.log("結果を表示します");
console.log(`あなたの誕生日は：${birthday}`);
console.log(`timestamp型に変換すると：${timestamp}`);
console.log(`投稿時間は：${postTime}`);
