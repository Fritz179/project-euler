const primes = [2]

function isPrime(prime) {
  for (num of primes) {
    if ((prime / num) % 1 == 0) return false
  }

  return true
}

let curr = 3
while (true) {
  if (isPrime(curr)) {
    primes.push(curr)

    if (primes.length == 10001) {
      console.log(`Answer: ${primes[10000]}`);
      break
    }
  } else {
    curr += 2
  }
}
