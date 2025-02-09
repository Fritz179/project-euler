const fs = require('fs')
const {join} = require('path')

const hands = JSON.parse(fs.readFileSync(join(__dirname, 'input.json'), 'utf8'))

const chars = {
  'T': 10,
  'J': 11,
  'Q': 12,
  'K': 13,
  'A': 14,
}
function value(hand) {
  const isFlush = hand.every(el => el[1] == hand[0][1])

  let values = []
  hand.forEach(card => {
    const num = chars[card[0]] || Number(card[0])
    if (!values[num]) values[num] = [num, 1]
    else values[num][1]++
  })

  const sort = values.sort((a, b) => {
    if (a[1] == b[1]) return b[0] - a[0]
    return b[1] - a[1]
  }).filter(e => e)

  const isStraight = sort.length == 5 && sort.every((el, i) => el[0] == sort[0][0] - i)

  // Straight Flush
  if (isStraight && isFlush) return [9, sort[0][0]]

  // Four of a king
  if (sort[0][1] == 4) return [8, sort[0][0]]

  // Full House
  if (sort[0][1] == 3 && sort[1][1] == 2) return [7, sort[0][0]]

  // Flush
  if (isFlush) return [6, sort[0][0]]

  // Straight
  if (isStraight) return [5, sort[0][0]]

  // Three of a kind
  if (sort[0][1] == 3) return [4, sort[0][0]]

  // Two pairs
  if (sort[0][1] == 2 && sort[1][1] == 2) return [3, sort[0][0], sort[1][0], sort[2][0]]

  // pair
  if (sort[0][1] == 2) return [2, ...sort.map(el => el[0])]

  // High card
  return [1, ...sort.map(el => el[0])]
}

function compare(a, b) {
  for (let i = 0; i < a.length; i++) {
    if (!b[i]) throw 'Invalid'

    if (a[i] == b[i]) continue
    return a[i] > b[i]
  }

  throw 'Invalid'
}

let answer = 0
for (let i = 0; i < hands.length; i++) {
  const hand1 = hands[i].splice(0, 5)
  const hand2 = hands[i]

  const value1 = value(hand1)
  const value2 = value(hand2)

  const winner1 = compare(value1, value2)

  // console.log(hand1, hand2, value1, value2, winner1);
  if (winner1) answer++
}



console.log(`Answer: ${answer}`)
