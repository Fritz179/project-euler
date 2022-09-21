function getProperDivisors(num) {
  const factors = [1]
  for (let i = 2; i * i <= num; i++) {
    if (i * i == num) {
      factors.push(i)
      break
    }

    if (num % i == 0) {
      factors.push(i)
      factors.push(num / i)
    }
  }


  return factors
}

function isAbundant(num) {
  let sum = 0
  getProperDivisors(num).forEach(num => sum += num)

  return sum > num
}

const abundants = []
for (let i = 1; i <= 28123; i++) {
  if (isAbundant(i)) abundants.push(i)
}

function isSum(num) {
  let a = 0
  let b = abundants.length - 1

  while (a != b) {
    if (abundants[a] + abundants[b] > num) {
      b--
      continue
    }

    if (abundants[a] + abundants[b] < num) {
      a++
      continue
    }

    return true
  }

  return abundants[a] + abundants[b] == num
}

let sum = 0
for (let i = 1; i <= 28123; i++) {
  if (!isSum(i)) {
    sum += i
    // console.log(i);
  }
}

console.log(`Answer: ${sum}`);
