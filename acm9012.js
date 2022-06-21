let readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
let answer = []

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
  answer.forEach(result => { console.log(result) })
  process.exit();
});

const solution = (PS) => {
  const PSArr = PS.split('')
  let sum = 0
  PSArr.forEach(e => {
    sum = sum + (e === '(' ? -1 : 1)
    if(sum>0) sum = 100
  })
  answer.push(sum === 0 ? 'YES' : 'NO')
}