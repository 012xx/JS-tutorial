// 01.誕生日の入力(例：04-17)
const birthday = window.prompt("誕生日を入力 例) 04-01");

// 02.現在のtimestampを取得
const now_timestamp = new Date().getTime();
console.log(`現在時刻のタイムスタンプは：${now_timestamp}です`);

// 03. 現在の年を取得し、2022-を1で取得した入力値の頭につける
const now_time = new Date();
const now_year = now_time.getFullYear();
console.log(`現在の西暦は${now_year}です。`);

const thisYear_birth = `${now_year}-${birthday}`;
console.log(`今年の誕生日は${thisYear_birth}ですね？`);

// 04.3でできたやつをtimestampにする
const date = new Date(thisYear_birth);
const timestamp = date.getTime();
console.log(`今年の貴方の誕生日のタイムスタンプは${timestamp}です。`);

// 05.4のtimestampと2のtimestampを比較して、4の方が大きくなるまで3の年を+1していく
// 1年後のタイムスタンプは31536000

// const date = new Date(birthday);

// const timestamp = date.getTime();
// const postTime = timestamp / 1000 + 10800;
// console.log(timestamp);

// console.log("結果を表示します");
// console.log(`あなたの誕生日は：${birthday}`);
// console.log(`timestamp型に変換すると：${timestamp}`);
// console.log(`投稿時間は：${postTime}`);
