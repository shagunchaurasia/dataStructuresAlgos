// There is a string, , of lowercase English letters that is repeated infinitely many times. Given an integer, , find and print the number of letter a's in the first  letters of the infinite string.
// Example

// The substring we consider is , the first  characters of the infinite string. There are  occurrences of a in the substring.

// Function Description

// Complete the repeatedString function in the editor below.

// repeatedString has the following parameter(s):

// s: a string to repeat
// n: the number of characters to consider

function repeatedString2(s: string, n: number): number {
  let aCounter = 0;
  if (s.length == 1) {
    return s == "a" ? n : 0;
  }

  let lengthOfString = Math.floor(n % s.length);
  let stringComplete = Array(lengthOfString).fill(s).join("");

  console.log(stringComplete);
  for (let i = 0; i < n; i++) {
    if (stringComplete[i] == "a") {
      aCounter++;
    }
  }

  return aCounter;
}

function repeatedString(s: string, n: number) {
  let count = 0,
    countA = 0,
    remainder = n % s.length;
  for (let i = s.length;  i>= 0; i--) {
    if (s.charAt(i) == "a") {
      count++;

      if (i < remainder) {
        countA++;
      }
    }
  }

  return ((n - remainder) / s.length) * count + countA;
}

console.log(repeatedString("a", 1000000000000));
console.log(repeatedString("x", 970770));
console.log(repeatedString("afcfffaged", 962645758455));
