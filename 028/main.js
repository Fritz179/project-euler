let answer = 1
let curr = 1

for (let i = 2; i < 1001; i += 2) {
  for (let k = 0; k < 4; k++) {
    curr += i
    answer += curr
  }
}

console.log(`Answer: ${answer}`)