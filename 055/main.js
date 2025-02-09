function isPalindrome(num) {
  const string = num.toString()

  for (let i = 0; i < string.length / 2; i++) {
    if (string[i] != string[string.length - i - 1]) return false
  }

  return true
}

let answer = 0
for (let i = 1; i < 10000; i++) here: {
  let curr = i
  for (let k = 0; k < 50; k++) {
    curr += Number(curr.toString().split('').reverse().join(''))
    if (isPalindrome(curr)) break here
  }

  answer++
}

console.log(`Answer: ${answer}`)
