const fs = require('fs')
const {join} = require('path')

const file = fs.readFileSync(join(__dirname, './input.txt'), 'utf8')
const inputs = file.split('\n').slice(0, -1)

const list = []
inputs.forEach(line => {
  line.split(' ').forEach(num => list.push(Number(num)))
})

let record = 0
const w = 20, h = 20, l = 4

// cols
for (let x = 0; x < w; x++) {
  for (let y = 0; y < h - l; y++) {
    let proda = 1
    let prodr = 1
    let prodl = 1
    for (let i = 0; i < l; i++) {
      proda *= list[x + (y + i) * w]
      if (x + i < w) prodr *= list[x + i + (y + i) * w]
      if (x - i >= 0) prodl *= list[x - i + (y + i) * w]
    }
    if (proda > record) record = proda
    if (prodr > record) record = prodr
    if (prodl > record) record = prodl
  }
}

// cols
for (let y = 0; y < h; y++) {
  for (let x = 0; x < w - l; x++) {
    let proda = 1
    let prodr = 1
    let prodl = 1
    for (let i = 0; i < l; i++) {
      proda *= list[x + i + y * w]
      if (y + i < h) prodr *= list[x + i + (y + i) * w]
      if (y - i >= 0) prodl *= list[x + i + (y - i) * w]
    }
    if (proda > record) record = proda
    if (prodr > record) record = prodr
    if (prodl > record) record = prodl
  }
}

console.log(record);
