let num = 20

function isValid(num) {
  for (let i = 2; i <= 20; i++) {
    if (num % i != 0) return false
  }

  return true
}

while (true) {
  if (isValid(num)) {
    console.log(`Answer: ${num}`);
    break
  }

  num++
}
