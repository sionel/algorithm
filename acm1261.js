// https://www.acmicpc.net/problem/1261

let readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let count = 0
let col
let row
let result
let map = []
let dap
rl.on('line', function (line) {
  if(count === 0){
    result = line.split(' ')
    col = Number(result[0])
    row = Number(result[1])
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