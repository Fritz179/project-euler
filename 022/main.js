const fs = require('fs')
const {join} = require('path')

const file = fs.readFileSync(join(__dirname, 'input.txt'), 'utf8')
const inputs = JSON.parse(file).sort()

const base = 'A'.charCodeAt(0) - 1
function getValue(name) {
  let total = 0

  name.split('').forEach(el => total += (el.charCodeAt() - base))

  return total
}

let sum = 0

inputs.forEach((name, i) => {
  sum += (i + 1) * getValue(name)
})

console.log(`Answer: ${sum}`);
