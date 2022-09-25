let record = 0

for (let a = 2; a < 10000; a++) {
  for (let b = 2; b < 9; b++) {
    let string = a.toString()
    for (let i = 2; i <= b; i++) {
      string += a * i
    }

    if (string.length > 9) break
    if (string.length != 9) continue

    const set = new Set(string.split(''))
    if (set.size == 9 && !set.has('0')) {
      const num = Number(string)
      if (num > record) {
        record = num
      }
      break
    }
  }
}

console.log(`Answer: ${record}`)