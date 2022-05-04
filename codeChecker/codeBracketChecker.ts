function codeBracketChecker(stringToCheck: string): boolean {
  let map: any = {};
  let result = false;
//   console.log(stringToCheck);
  for (let i = 0; i < stringToCheck.length; i++) {
    map[stringToCheck[i]] = map[stringToCheck[i]]
      ? map[stringToCheck[i]] + 1
      : 1;
  }

  const openingArray = ["{", "[", "("];
  const closingArray = ["}", "]", ")"];

  for (let j = 0; j < openingArray.length; j++) {
    //   console.log("Checking ", map[openingArray[j]] , map[closingArray[j]]);
      if(map[openingArray[j]]==map[closingArray[j]]){
        result = true;
      }
      else{
          result = false;
          break;
      }
  }

//   console.log(map);

  return result;
}

console.log(codeBracketChecker("{[]]()}"));
console.log(codeBracketChecker("{[]](}{}{}}})}"));
console.log(codeBracketChecker("{[]()}{}{}{}{[][][][]()}"));
console.log(codeBracketChecker(""));
console.log(codeBracketChecker("{[(])}"));

