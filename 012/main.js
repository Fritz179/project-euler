function getFactors(num) {
  const factors = []
  for (let i = 1; i * i < num; i++) {
    if (num % i == 0) {
      factors.push(i)
      factors.push(num / i)
    }
  }

  return factors
}

let triangle = 0
let base = 1
while (true) {
  triangle += base

  if (getFactors(triangle).length > 500) {
    console.log(`Answer: ${triangle}`);
    break
  }

  base++
}
