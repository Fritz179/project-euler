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
