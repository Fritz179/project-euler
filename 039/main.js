let record = 0
let holder = 0

for (let len = 1; len <= 1000; len++) {
  let solutions = 0
  for (let a = 1; a < len; a++) {
    for (let b = 1; b < len - a; b++) {
      const c = len - a - b

      if (c < 1) break
      if (a * a + b * b == c * c) {
        solutions++
      }
    }
  }

  if (solutions > record) {
    record = solutions
    holder = len
  }
}

console.log(`Answer: ${holder}`)