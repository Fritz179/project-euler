function check(a, b) {
  if (a.length != b.length) return false

  a.forEach(c => b = b.replace(c, ''))
  return b == ''
}


function isPerm(num) {
  a = num.toString().split('')
  if (!check(a, (num * 2).toString())) return false
  if (!check(a, (num * 3).toString())) return false
  if (!check(a, (num * 4).toString())) return false
  if (!check(a, (num * 5).toString())) return false
  if (!check(a, (num * 6).toString())) return false

  return true
}

const max = 1000000
for (let i = 1; i < max; i++) {

  // skip impossible number
  if (i.toString().length != (i * 6).toString().length) {
    i = Number('1' + i.toString().replaceAll(/./g, '0'))
  }

  if (isPerm(i)) {
    console.log(i);
  }
}
