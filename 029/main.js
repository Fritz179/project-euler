const set = new Set()

for (let a = 2; a <= 100; a++) {
  for (let b = 2; b <= 100; b++) {
    set.add(a ** b)
  }
}

console.log(`Answer: ${set.size}`)