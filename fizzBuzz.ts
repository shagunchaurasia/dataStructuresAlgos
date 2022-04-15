function fizzBuzz(n: number): string {
  let finalString = "";
  for (let i = 1; i <= n; i++) {
    if (i % 3 == 0 && i % 5 === 0) {
      finalString += "FizzBuzz\n";
    }
    if (i % 3 == 0 && i % 5 != 0) {
      finalString += "Fizz\n";
    }
    if (i % 5 == 0 && i % 3 != 0) {
      finalString += "Buzz\n";
    }
    if (i % 3 !== 0 && i % 5 !== 0) {
      finalString += i + "\n";
    }
  }

  return finalString.trimEnd();
}
console.log(fizzBuzz(15));
