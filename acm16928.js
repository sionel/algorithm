// https://www.acmicpc.net/problem/16928

let readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
const map = []
const radder = []
const snake = []
rl.on('line', function (line) {
  if(count === 0){
    result = line.split(' ')
    radder = Number(result[0])
    snake = Number(result[1])
  }else {
    for(let i = 0 ; i < row ; i++){
      result = line.split('').map(e=>Number(e))
      map.push(result)
    }
  }

  solution(map) 
  rl.close();
}).on('close', function () {
  
  process.exit();
});

solution = (map) => {

  

  console.log();
}