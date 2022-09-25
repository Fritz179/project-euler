let answer = 0

for (let i = 2; i < 200000; i++) {
  const nums = i.toString().split('').map(n => Number(n))
  let sum = 0
  nums.forEach(num => sum += num ** 5)

  if (sum == i) {
    answer += sum
  }
}

console.log(`Answer: ${answer}`)