let readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
let count = 0
let answer = ''
rl.on('line', function (line) {
  if (count === 0) count = Number(line)
  else {
    solution(line)
    rl.close()
  }
}).on('close', function () {
  console.log(answer);
  process.exit();
});

const solution = (word) => {
  const spells = word.split('')
  spells.forEach((spell, index) => {
    answer = answer.padEnd(count * (index + 1), spell)
  });
}
