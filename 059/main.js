const fs = require('fs')
const {join} = require('path')

const file = fs.readFileSync(join(__dirname, 'input.json'), 'utf8')
const data = JSON.parse(file)

const start = 'a'.charCodeAt(0)
const end = 'z'.charCodeAt(0)

for (let a = start; a <= end; a++) {
  for (let b = start; b <= end; b++) {
    for (let c = start; c <= end; c++) {
      const out = [...data].map((e, i) => {
        if ((i % 3) == 0) return e ^ a
        if ((i % 3) == 1) return e ^ b
        if ((i % 3) == 2) return e ^ c
      })

      const string = String.fromCharCode(...out)

      // if (string.match(/^[\w\s\n\d.,!?]*$/)) {
      const match = [...string.matchAll(/ \w* /g)]
      const noMatch = [...string.matchAll(/ \W* /g)]

      if (match.length > 100) {
        let sum = 0
        out.forEach(e => sum += e)
        console.log(`Answer: ${sum}`);
        process.exit()
      }
    }

  }
}

console.log(25*25*25);