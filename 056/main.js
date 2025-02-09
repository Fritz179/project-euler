let record = 0

for (let a = 1n; a < 100; a++) {
  for (let b = 1n; b < 100; b++) {
    const num = a ** b
    let sum = 0
    num.toString().split('').map(n => sum += Number(n))
    if (sum > record) record = sum
  }
}

console.log(`Answer: ${record}`)
