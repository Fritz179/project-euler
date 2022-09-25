const pentagonMemo = []
function pentagon(n) {
  if (!pentagonMemo[n]) {
    pentagonMemo[n] = 0.5 * n * (3 * n - 1)
  }

  return pentagonMemo[n]
}

for (let i = 1; i < 10000; i++) {
  pentagon(i)
}

const set = new Set(pentagonMemo)

let record = Infinity
set.forEach(a => {

  // could start from index of a
  set.forEach(b => {
    if (set.has(a + b) && set.has(a - b)) {
      const value = Math.abs(a - b)
      if (value < record) {
        record = value
      }
    }
  })
})

console.log(`Answer: ${record}`)
