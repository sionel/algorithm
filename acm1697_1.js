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
  const bfs = recursion([], start, end, 0);
  return bfs[end];
};

const recursion = (arr, pivot, end, count) => {
  if (arr[pivot] < count) {
    return arr;
  } else {
    arr[pivot] = count;
    // console.log(arr[pivot]);
  }
  if (pivot === end) {
    return arr;
  } else if (pivot === 0) {
    arr = recursion(arr, pivot + 1, end, count + 1);
  } else if (pivot < end) {
    arr = recursion(arr, pivot * 2, end, count + 1);
    arr = recursion(arr, pivot + 1, end, count + 1);
    arr = recursion(arr, pivot - 1, end, count + 1);
  } else if (pivot > end) {
    arr = recursion(
      arr,
      pivot - 1 - (pivot - end),
      end,
      count + 1 + (pivot - end)
    );
  }
  return arr;
};
