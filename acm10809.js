let readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
let answer = Array(26).fill(-1)

rl.on('line', function (line) {
  solution(line)
  rl.close()
}).on('close', function () {
  answer.forEach(spell => { console.log(spell) })
  process.exit();
});

const solution = (word) => {
  const wordArr = word.split('')
  let answerIndex = 0
  wordArr.forEach((word, wordIndex) => {
    answerIndex = word.codePointAt() - 97
    answer[answerIndex] = answer[answerIndex] === -1 ? wordIndex : answer[answerIndex]
  });
}