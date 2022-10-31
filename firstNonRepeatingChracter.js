let firstNonRepeatingCharacter = (str) => {
  let repeat = true;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      continue;
    } else {
      for (let j = 0; j < i; j++) {
        if (str[i] !== str[j]) {
          repeat = false;
        } else {
          continue;
        }
      }
      if (repeat) {
        repeat = false;
        continue;
      } else {
        repeat = true;
        for (let k = i + 1; k < str.length; k++) {
          if (str[i] !== str[k]) {
            repeat = false;
          } else {
            repeat = true;
            break;
          }
        }
        if (repeat) {
          repeat = false;
          continue;
        } else {
          return str[i];
        }
      }
    }
  }
}

let str = "aaabcccdeeef";
let str = "abcbad";
console.log(firstNonRepeatingCharacter(str));
