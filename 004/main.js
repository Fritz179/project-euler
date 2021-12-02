let record = 0

function isPalindrome(n) {
  str = n.toString()

  for (let i = 0; i < str.length; i++) {
    if (str[str.length - i - 1] != str[i]) return false
  }

  return true
}

for (let i = 999; i > 0; i--) {
  for (let j = 999; j > 0; j--) {
    let prod = i * j

    if (prod < record) break

    if (isPalindrome(prod)) {
      record = prod
    }
  }
}

console.log(`Answer: ${record}`);
