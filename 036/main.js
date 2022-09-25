function isPalindrom(num) {
  const string = num.toString()

  for (let i = 0; i < string.length / 2; i++) {
    if (string[i] != string[string.length - i - 1]) return false
  }

  return true
}

let answer = 0
for (let i = 1; i < 1000000; i++) {
  if (isPalindrom(i) && isPalindrom(i.toString(2))) {
    answer += i
  }
}

console.log(`Answer: ${answer}`)