function findExtraCharacterInString(stringOne: string, stringTwo: string) {
  let map: any = {};
  for (let i = 0; i < stringTwo.length; i++) {
    map[stringTwo[i]] = map[stringTwo[i]] ? map[stringTwo[i]] + 1 : 1;
  }
  console.log(map);

  for (let j = 0; j < stringOne.length; j++) {
    map[stringOne[j]]--;
  }
  console.log(map);

  for (const character in map) {
    if (map[character] > 0) {
      return character;
    }
  }
}

console.log(findExtraCharacterInString("abcd", "abcde"));
console.log(findExtraCharacterInString("kxlm", "kxlml"));
console.log(findExtraCharacterInString("shagunshagun", "shagundshagun"));
