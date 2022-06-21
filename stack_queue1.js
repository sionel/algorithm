function solution(bridge_length, weight, truck_weights) {
  let count = 0;
  let queue = [];
  let sum = 0;
  let next = 0;
  let exit = 0;
  for (let i = 0; i < bridge_length; i++) queue.push(0);

  while (true) {
    next = next ? next : truck_weights.shift();
    exit = queue.shift();
    sum = exit ? sum - exit : sum;
    if (next !== undefined && sum + next <= weight) {
      sum += next;
      queue.push(next);
      next = 0;
    } else {
      queue.push(0);
    }
    count++;
    if (next === undefined && sum === 0) break;
  }

  return count;
}

const bridge_length = 100;
const weight = 100;
const truck_weights = [10,10,10,10,10,10,10,10,10,10]	
const result = solution(bridge_length, weight, truck_weights);

console.log(result);
