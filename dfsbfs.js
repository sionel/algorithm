function solution(numbers, target) {
  return dfs(target, numbers, 0, 0);
}

function dfs(target, numbers, depth, answer) {
  let tmp = answer
  if (depth === numbers.length) {
    let sum = 0;
    for (const num of numbers) {
      sum += num;
    }
    return sum === target ? tmp + 1 : tmp;
  } else {
    tmp = dfs(target, numbers, depth + 1, tmp);
    numbers[depth] *= -1;
    tmp = dfs(target, numbers, depth + 1, tmp);
  }
  return tmp;
}

const numbers = [1, 1, 1, 1, 1];
const target = 3;

console.log(solution(numbers, target));
