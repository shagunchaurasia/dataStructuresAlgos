function repeatedString(s, n) {

  //Function to repeat the string till n length
  let finalString = s;

  if(s.indexOf("a")<0){
      return 0;
  }

  if(s.length==1 && s=='a'){
    return n;
  }

  while (finalString.length <= n) {
    finalString += s;
  }
  finalString = finalString.substring(0, n);
  console.log(finalString);

  let countA = 0;

  for (let letter in finalString) {
    if (finalString[letter] === "a") countA++;
  }
  return countA;
}


console.log(repeatedString("axsxa", 1000));
console.log(repeatedString("a", 1000000000000));
console.log(repeatedString("x", 970770));
// console.log(repeatedString("afcfffaged", 962645758455));
