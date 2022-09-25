const triangleMemo = []
function triangle(n) {
  if (!triangleMemo[n]) {
    triangleMemo[n] = 0.5 * n * (n + 1)
  }

  return triangleMemo[n]
}

for (let i = 1; i < 100; i++) {
  triangle(i)
}

const set = new Set(triangleMemo)


const fs = require('fs')
const {join} = require('path')

const file = fs.readFileSync(join(__dirname, 'input.json'), 'utf8')
const input = JSON.parse(file)

let answer = 0

input.forEach(word => {
  let sum = 0
  word.split('').forEach(letter => sum += letter.charCodeAt(0) - '@'.charCodeAt(0))
  if (set.has(sum)) answer++
})

console.log(`Answer: ${answer}`)
