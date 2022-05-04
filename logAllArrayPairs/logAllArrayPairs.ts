function logAllArrayPairs(arrayValue: string[]) {
  for (let i = 0; i < arrayValue.length; i++) {
    for (let j = 0; j < arrayValue.length; j++) {
      console.log(arrayValue[i], arrayValue[j]);
    }
  }
}

logAllArrayPairs(["a", "b", "c", "d", "e", "f"]);

//Nested loops have bad complexity.. This logic has complexity of O(n^2)
