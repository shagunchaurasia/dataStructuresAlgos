function firstRecurringCharacter(arrayGiven: number[]): number | void {
  let map: any = {};

  for (let i = 0; i < arrayGiven.length; i++) {
    if (map[arrayGiven[i]]) {
      return arrayGiven[i];
    }
    map[arrayGiven[i]] = 1;
  }

  return undefined;
}

console.log(firstRecurringCharacter([2, 5, 1, 2, 3, 5, 1, 2, 4]));
console.log(firstRecurringCharacter([2, 1, 1, 2, 3, 5, 1, 2, 4]));
console.log(firstRecurringCharacter([2, 3, 4, 5]));
