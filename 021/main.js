function getAmicableNumber(num) {
  let sum = 1
  for (let i = 2; i * i < num; i++) {
    if (num % i == 0) {
      sum += i
      sum += (num / i)
    }
  }

  return sum
}

let sum = 0
for (let i = 1; i < 10000; i++) {
  const num = getAmicableNumber(i)

  if (num == i) continue

  if (getAmicableNumber(num) == i) {
    sum += i
  }
}

console.log(`Answeer: ${sum}`);
