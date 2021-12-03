for (let a = 0; a < 500; a++) {
  for (let b = 0; b < 500; b++) {
    const c = Math.sqrt(a * a + b * b)
    if (c % 1 == 0) {
      if (a + b + c == 1000) {
        console.log(`Answer: ${a * b * c}`);
        return
      }
    }
  }
}
