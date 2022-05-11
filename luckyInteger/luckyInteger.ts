function luckyInteger(arrayGiven: number[]) {
  let map: any = {};
  let result = -1;
  for (let i = 0; i < arrayGiven.length; i++) {
    map[arrayGiven[i]] = map[arrayGiven[i]] ? map[arrayGiven[i]] + 1 : 1;
  }

  for (const value in map) {
    if (value == map[value] && map[value] > result) {
      result = map[value];
    }
  }
  return result;
}

console.log(luckyInteger([2, 3, 4, 5]));
console.log(luckyInteger([2, 2, 4, 5]));
console.log(luckyInteger([2, 4, 4, 4, 4, 5]));
console.log(luckyInteger([2, 4, 4, 4, 4, 5,5,5,5,5]));
