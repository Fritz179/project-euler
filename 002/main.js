let answer = 0

let a = 0
let b = 1

while (true) {
  let sum = a + b

  if (sum > 4000000) break

  a = b
  b = sum

  if (sum % 2 == 0) {
    answer += sum
  }
}

console.log(`Answer: ${answer}`);
