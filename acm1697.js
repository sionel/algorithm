let readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', function (line) {
  const result = solution(
    Number(line.split(' ')[0]),
    Number(line.split(' ')[1])
  );
  console.log(result);
  rl.close();
}).on('close', function () {
  process.exit();
});

const solution = (start, end) => {
  const visited = Array(100001).fill(false);

  const queue = [[start, 0]];
  while (queue.length) {
    const [pos, t] = queue.shift();
    if (visited[pos]) {
      continue;
    }

    visited[pos] = true;
    if (pos === end) {
      return t;
    }

    if (pos * 2 <= 100000) {
      queue.push([pos * 2, t + 1]);
    }
    if (pos + 1 <= 100000) {
      queue.push([pos + 1, t + 1]);
    }
    if (pos - 1 >= 0) {
      queue.push([pos - 1, t + 1]);
    }
  }
};
