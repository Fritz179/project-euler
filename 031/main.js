const values = [1, 2, 5, 10, 20, 50, 100, 200]

const howManyMemo = []
function howMany(n) {
  if (!howManyMemo[n]) {
    if (n == 0) return [[0, 0, 0, 0, 0, 0, 0, 0]]

    howManyMemo[n] = []

    const seen = new Set()
    values.forEach((value, i) => {
      const newValue = n - value

      if (newValue >= 0) {
        const arrays = howMany(newValue)

        arrays.forEach(array => {
          newArray = [...array]
          newArray[i]++

          const string = newArray.join('|')
          if (!seen.has(string)) {
            seen.add(string)
            howManyMemo[n].push(newArray)
          }
        })
      }
    })
  }

  return howManyMemo[n]
}

console.log(`Answer: ${howMany(200).length}`)

// Better solution from Exomo
// #include <iostream>
//
// int coins[8] = {200, 100, 50, 20, 10, 5,2,1};
//
// int findposs(int money, int maxcoin)
// {
//     int sum = 0;
//     if(maxcoin == 7) return 1;
//     for(int i = maxcoin; i<8;i++)
//     {
//         if (money-coins[i] == 0) sum+=1;
//         if (money-coins[i] > 0) sum+=findposs(money-coins[i], i);
//     }
//     return sum;
// }
//
// int main()
// {
//     cout<<findposs(200, 0)<<endl;
// }