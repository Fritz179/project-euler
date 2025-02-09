const expandMemo = []
function expand(num) {
  if (num == 0) return [1n, 1n]

  if (!expandMemo[num]) {
    const [a, b] = expand(num - 1)
    expandMemo[num] = [a + b + b, a + b]
  }

  return expandMemo[num]
}


let answer = 0

for (let i = 0; i < 1001; i++) {
  const [a, b] = expand(i)
  if (a.toString().length > b.toString().length) answer++
}

console.log(`Answer: ${answer}`)
