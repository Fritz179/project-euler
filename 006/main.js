let sum = 0
let square = 0

for (let i = 0; i <= 100; i++) {
  sum += i
  square += i * i
}

console.log(`Answer: ${sum * sum - square}`);
