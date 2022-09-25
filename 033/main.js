const specials = []

for (let a = 10; a < 100; a++) {
  for (let b = a + 1; b < 100; b++) {
    const value = a / b

    const stringA = a.toString()
    const stringB = b.toString()

    stringA.split('').forEach(digit => {
      const newA = stringA.replace(digit, '')
      const newB = stringB.replace(digit, '')
      const newValue = Number(newA) / Number(newB)

      if (value == newValue && (a % 10) != 0) {
        specials.push(value)
      }
    })
  }
}

let sum = 1
specials.forEach(n => sum *= n)

console.log(sum)