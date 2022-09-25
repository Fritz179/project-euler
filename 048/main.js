let total = 0n

for (let i = 1n; i <= 1000; i++) {
  total += i ** i
}

console.log(`Answer: ${total.toString().slice(-10)}`)
