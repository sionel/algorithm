function solution(N, number) {
  const tmparr = Array.from({length: 9}, () => new Set());
  tmparr[1].add(N);

  if (number === N) return 1;
  else {
    for (let i = 2; i <= 8; i++) {
      for (let j = 1; j <= Math.floor(i / 2); j++) {
        for (const iter1 of tmparr[j]) {
          for (const iter2 of tmparr[i - j]) {
            
            for (const iterator of 사칙(iter1, iter2)) {
              tmparr[i].add(iterator);
            }
            
          }
        }
      }

      let last = [...tmparr[i - 1]].pop();
      tmparr[i].add(...[Number('' + last + N)]);

      if (tmparr[i].has(number)) {
        return i;
      }
    }

    return -1;
  }
}

function 사칙(num, N) {
  const 쁠 = num + N;
  const 마 = num - N;
  const 역마 = N - num;
  const 곱 = num * N;
  const 나 = N !== 0 ? Math.floor(num / N) : 0;
  const 역나 = num !== 0 ? Math.floor(N / num) : 0;
  return new Set([쁠, 마, 역마, 곱, 나, 역나]);
}

const N = 5;
const number = 110;

const result = solution(N, number);

console.log(result);
