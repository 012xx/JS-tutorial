// 01.誕生日の入力(例：04-17)
const birthday = window.prompt("誕生日を入力 例) 04-01");
// console.log(birthday.match(/(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])/));
if (!birthday.match(/(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])/)) {
  console.log("error!!");
}

// 02.現在のtimestampを取得
const nowTimestamp = new Date().getTime();
console.log(`現在時刻のタイムスタンプは：${nowTimestamp}です`);

// 03. 現在の年を取得し、2022-を1で取得した入力値の頭につける
const nowTime = new Date();
const nowYear = nowTime.getFullYear();
console.log(`現在の西暦は${nowYear}です。`);

const thisYearBirth = `${nowYear}-${birthday}`;
console.log(`今年の誕生日は${thisYearBirth}ですね？`);

// 04.3でできたやつをtimestampにする
let date = new Date(thisYearBirth);
const timestamp = date.getTime();
console.log(`今年の貴方の誕生日のタイムスタンプは${timestamp}です。`);

// 05.4のtimestampと2のtimestampを比較して、4の方が大きくなるまで3の年を+1していく
let nextBirtday = timestamp;
let nextYear = nowYear;
while (nextBirtday < nowTimestamp) {
  nextYear = nowYear + 1;
  const nextYearBirth = `${nextYear}-${birthday}`;
  console.log(`次の誕生日は${nextYearBirth}ですね？`);
  date = new Date(nextYearBirth);
  nextBirtday = date.getTime();
}
console.log(`次の誕生日のタイムスタンプは${nextBirtday}です。`);

const postTime = nextBirtday / 1000 + 10800;
console.log(`Slackに投稿される時間は${postTime}です`);

// const date = new Date(birthday);

// const timestamp = date.getTime();
// const postTime = timestamp / 1000 + 10800;
// console.log(timestamp);

// console.log("結果を表示します");
// console.log(`あなたの誕生日は：${birthday}`);
// console.log(`timestamp型に変換すると：${timestamp}`);
// console.log(`投稿時間は：${postTime}`);
