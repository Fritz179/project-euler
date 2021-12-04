let year = 1900
let day = 7
let month = 1

function getFebruaryLen() {
  if (year % 400 == 0) return 29
  if (year % 100 == 0) return 28
  if (year % 4 == 0) return 29
  return 28
}

function getMonthLen() {
  switch (month) {
    case 1: return 31
    case 2: return getFebruaryLen()
    case 3: return 31
    case 4: return 30
    case 5: return 31
    case 6: return 30
    case 7: return 31
    case 8: return 31
    case 9: return 30
    case 10: return 31
    case 11: return 30
    case 12: return 31
    default: console.log(`Invalid month: ${month}`);
  }
}

let count = 0
while (year < 2001) {
  if (day == 1 && year > 1900) count++
  day += 7

  const len = getMonthLen()
  if (day > len) {
    day -= len
    month++
  }

  if (month == 13) {
    month = 1
    year++
  }
}

console.log(`Answer: ${count}`);
