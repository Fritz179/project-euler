let answer = 0
for (let i = 1n; i < 1000; i++) out: {
  for (let j = 1n; ; j++) {
    const len = (j ** i).toString().length
    if (len == i) {
      console.log(j, i, j ** i);
      answer++
    }
    if (len > i) break out
  }
}

console.log(`Answer: ${answer}`);