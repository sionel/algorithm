// https://programmers.co.kr/learn/courses/30/lessons/60059

function solution(key, lock) {
  const ksize = key.length;
  const lsize = lock.length;
  const msize = lsize + (ksize - 1) * 2;
  // let map = new Array(msize).fill(new Array(msize).fill(0));
  let map = Array.from(Array(msize), () => Array(msize).fill(0))

  console.log(map);
  for (let i = 0; i < 4; i++) {
    key = lotateKey(key);


    if(checkMap(map,ksize,lsize)) return true
  }

  return false;
}

function lotateKey(key) {
  const size = key.length;
  let tmp = new Array(size).fill(new Array(size).fill(0));

  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      tmp[i][j] = key[size - 1 - j][i];
    }
  }
  return tmp;
}
function checkMap(map ,ksize, lsize) {
  let check = false 

  return check
}

const key = [
  [0, 0, 0],
  [1, 0, 0],
  [0, 1, 1],
];
const lock = [
  [1, 1, 1],
  [1, 1, 0],
  [1, 0, 1],
];
const msize = 7
// let map = new Array(msize).fill(...new Array(msize).fill(0));

// map[0][1] = 2
// console.log(map);
console.log(solution(key, lock));
