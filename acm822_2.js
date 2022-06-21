let readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
let days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

let count = 0
let first = 0
rl.on('line', function (line) {
  if (count === 0) first = Number(line)
  else {
    solution(line)
    if (count === first) rl.close()
  }
  count++

}).on('close', function () {
  process.exit();
});

const solution = (date) => {
  const year = Number(date.split(' ')[0])
  const month = Number(date.split(' ')[1])
  const newMonth = month === 1 ? 12 : month - 1
  const newYear = month === 1 ? year - 1 : year
  const newDay = getNewDay(newYear, newMonth)
  console.log('' + newYear + ' ' + newMonth + ' ' + newDay);
}

const checkLeapYear = (year) => {
  return year % 400 === 0 || (year % 100 !== 0 && year % 4 === 0)
}
const getNewDay = (year, month) => {
  return checkLeapYear(year) && month === 2 ? 29 : days[month - 1]
}