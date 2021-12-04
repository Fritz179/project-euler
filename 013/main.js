const fs = require('fs')
const {join} = require('path')

const file = fs.readFileSync(join(__dirname, 'input.txt'), 'utf8')
const inputs = file.split('\n').slice(0, -1)

let sum = 0n

inputs.forEach(line => sum += BigInt(line))

console.log(`Answer: ${sum.toString(10).slice(0, 10)}`);
