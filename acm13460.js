let readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
let row = 0
let col = 0
let count = 0
let map = []
let R = []
let B = []
rl.on('line', function (line) {
  if (col === 0) {
    [col, row] = line.split(' ')
    // map = Array.from(Array(col),()=>Array(row))
  } else {
    map.push(line.split(''))

    line.split('').map((e, row) => {
      if (e === 'R') {
        R = [count, row]
      }
      else if (e === 'B') {
        B = [count, row]
      }
    })
    if (count++ === col - 1) {
      rl.close()
    }
  }
}).on('close', function () {
  solution()
  process.exit();
});

const solution = () => {
  console.log(move([[0, [R, B]]]));
}

const move = (resultArray) => {
  const [depth, point] = resultArray.shift()
  if (depth === 10) return -1
  let tmp = []
  try {
    tmp = [depth + 1, left(point)]
    checkGoal()
    tmp && resultArray.push(tmp)
    tmp = [depth + 1, right(point)]
    checkGoal()
    tmp && resultArray.push(tmp)
    tmp = [depth + 1, up(point)]
    checkGoal()
    tmp && resultArray.push(tmp)
    tmp = [depth + 1, down(point)]
    checkGoal()
    tmp && resultArray.push(tmp)
  } catch (e) {
    console.log(e);
    return e === 'R' ? depth + 1 : -1
  }
  move(resultArray)
}

const left = ([[Ry, Rx], [By, Bx]]) => {
  let [movey, movex] = [Ry, Rx]
  if (Ry === By && Bx < Rx) {
    while (checkMapCanGo([By, Bx], [0, -1])) {
      Bx = Bx - 1
    }
    while (checkMapCanGo([movey, movex], [0, -1])) {
      movex = movex - 1
    }
  } else {
    while (checkMapCanGo([movey, movex], [0, -1])) {
      movex = movex - 1
    }
    while (checkMapCanGo([By, Bx], [0, -1])) {
      Bx = Bx - 1
    }
  }

  return movey === Ry && movex === Rx ? null : [[movey, movex], [By, Bx]]
}
const right = ([[Ry, Rx], [By, Bx]]) => {
  let [movey, movex] = [Ry, Rx]
  if (Ry === By && Bx > Rx) {
    while (checkMapCanGo([By, Bx], [0, 1])) {
      Bx = Bx + 1
    }
    while (checkMapCanGo([movey, movex], [0, 1])) {
      movex = movex + 1
    }
  } else {
    while (checkMapCanGo([movey, movex], [0, 1])) {
      movex = movex + 1
    }
    while (checkMapCanGo([By, Bx], [0, 1])) {
      Bx = Bx + 1
    }
  }
  return movey === Ry && movex === Rx ? null : [[movey, movex], [By, Bx]]
}
const up = ([[Ry, Rx], [By, Bx]]) => {
  let [movey, movex] = [Ry, Rx]
  if (Rx === Bx && By < Ry) {
    while (checkMapCanGo([By, Bx], [-1, 0])) {
      By = By - 1
    }
    while (checkMapCanGo([movey, movex], [-1, 0])) {
      movey = movey - 1
    }
  } else {
    while (checkMapCanGo([movey, movex], [-1, 0])) {
      movey = movey - 1
    }
    while (checkMapCanGo([By, Bx], [-1, 0])) {
      By = By - 1
    }
  }
  return movey === Ry && movex === Rx ? null : [[movey, movex], [By, Bx]]
}
const down = ([[Ry, Rx], [By, Bx]]) => {
  let [movey, movex] = [Ry, Rx]
  if (Rx === Bx && By > Ry) {
    while (checkMapCanGo([By, Bx], [1, 0])) {
      By = By + 1
    }
    while (checkMapCanGo([movey, movex], [1, 0])) {
      movey = movey + 1
    }
  } else {
    while (checkMapCanGo([movey, movex], [1, 0])) {
      movey = movey + 1
    }
    while (checkMapCanGo([By, Bx], [1, 0])) {
      By = By + 1
    }
  }
  return movey === Ry && movex === Rx ? null : [[movey, movex], [By, Bx]]
}

const checkMapCanGo = (point, destination) => {
  const [py, px] = point
  const [dy, dx] = destination
  if (px - dx === -2) throw 'B'
  if (map[py + dy][px + dx] === '.') {
    const tmp = map[py][px]
    map[py + dy][px + dx] = tmp
    map[py][px] = '.'
    return true
  } else if (map[py + dy][px + dx] === 'O') {
    map[py][px] = '.'
    return true
  } else {
    return false
  }
}
const checkGoal = () => {
  const tmp = []
  map.forEach(rows => {
    rows.forEach(e => tmp.push(e))
  })
  if (tmp.indexOf('B') === -1) throw 'B'
  if (tmp.indexOf('R') === -1) throw 'R'

}