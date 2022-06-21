let readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
let answer = 1

rl.on('line', function (line) {
  answer = solution(Number(line), answer)
  rl.close()
}).on('close', function () {
  console.log(answer);
  process.exit();
});

const solution = (number, answer) => {
  return number === 0 ? answer * 1 : solution(number - 1, answer * number)
}