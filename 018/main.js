const fs = require('fs')
const {join} = require('path')

const file = fs.readFileSync(join(__dirname, 'input.txt'), 'utf8')
const inputs = file.split('\n').slice(0, -1)

const rows = inputs.map(line => line.split(' ').map(num => Number(num)))

const hashes = {}
function solvePos(x, y) {
  if (y == rows.length - 1) {
    return rows[y][x]
  }

  const hash = `${x}_${y}`

  if (!hashes[hash]) {
    const left = solvePos(x, y + 1)
    const right = solvePos(x + 1, y + 1)

    const top = left > right ? left : right
    hashes[hash] = top + rows[y][x]
  }

  return hashes[hash]
}

console.log(`Answer: ${solvePos(0, 0)}`);
