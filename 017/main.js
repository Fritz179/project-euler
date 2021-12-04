function len(num) {
  if (num >= 100) {
    const hundreds = (num - num % 100) / 100
    const rest = num - hundreds * 100
    const after = rest ? 'and'.length + len(rest) : 0
    return len(hundreds) + 'hundred'.length + after
  }

  if (num >= 20) {
    const rest = num % 10
    const tens = (num - rest) / 10

     switch (tens) {
       case 2: return 'twenty'.length + len(rest); break;
       case 3: return 'thirty'.length + len(rest); break;
       case 4: return 'forty'.length + len(rest); break;
       case 5: return 'fifty'.length + len(rest); break;
       case 6: return 'sixty'.length + len(rest); break;
       case 7: return 'seventy'.length + len(rest); break;
       case 8: return 'eighty'.length + len(rest); break;
       case 9: return 'ninety'.length + len(rest); break;
       default: console.log('Nope');

     }
  }

  switch (num) {
    case 0: return ''.length; break;
    case 1: return 'one'.length; break;
    case 2: return 'two'.length; break;
    case 3: return 'three'.length; break;
    case 4: return 'four'.length; break;
    case 5: return 'five'.length; break;
    case 6: return 'six'.length; break;
    case 7: return 'seven'.length; break;
    case 8: return 'eight'.length; break;
    case 9: return 'nine'.length; break;
    case 10: return 'ten'.length; break;
    case 11: return 'eleven'.length; break;
    case 12: return 'twelve'.length; break;
    case 13: return 'thirteen'.length; break;
    case 14: return 'fourteen'.length; break;
    case 15: return 'fifteen'.length; break;
    case 16: return 'sixteen'.length; break;
    case 17: return 'seventeen'.length; break;
    case 18: return 'eightenn'.length; break;
    case 19: return 'nineteen'.length; break;
    default: console.log(`Unhandlend: ${num}`);

  }
}

let total = 'onethousand'.length

for (let i = 0; i < 1000; i++) {
  total += len(i)
}

console.log(total);
