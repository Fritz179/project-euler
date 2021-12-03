const primes = [2]

function isPrimeArray(num) {
  if (num % 2 === 0 || num % 3 === 0) return false;

  let i = 5;
  while (i * i <= num) {
    if (num % i === 0 || num % (i + 2) === 0) {
      return false;
    }
    i = i + 6;
  }

  primes.push(num)
  return true;
}

for (let i = 3; i < 2000000; i++) {
  isPrimeArray(i)
}

let sum = 0

for (num of primes) sum += num

console.log(`Answer: ${sum}`);
