let readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
let answer = 1

rl.on('line', function (line) {
  answer = solution(Number(line))
  rl.close()
}).on('close', function () {
  console.log(answer);
  process.exit();
});

const solution = (number) => {
  return number === 0 ? 0 : number === 1 ? 1 : solution(number-1) + solution(number-2)  
}