function solution(progresses, speeds) {
  let count = [];
  let queue = [];
  let day = 0;

  for (let i = 0; i < progresses.length; i++) queue.push(progresses[i]);
  while (true) {
    for (let i = 0; i < progresses.length; i++) {
      queue[i] += speeds[i];
    }
    if (queue[0] >= 100) {
      while (queue[0] >= 100) {
        day++;
        queue.shift();
        progresses.shift()
        speeds.shift()
      }
    }
    if (day) {
      count.push(day);
      day = 0;
    }
    if (queue.length === 0) break;
  }
  return count;
}

const progresses = [93, 30, 55];
const speeds = [1, 30, 5];
const result = solution(progresses, speeds);

console.log(result);
