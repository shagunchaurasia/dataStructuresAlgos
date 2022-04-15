/**
 *
 * @param num Number of items to be printed in Fibonacci Sequence
 * @param getThisValue Print the value corresponding this index
 * @returns
 */

function fibonacciIterative(num: number, getThisValue: number) {
  let fibonacciSequence = [0, 1];
  for (let i = 2; i <= num; i++) {
    fibonacciSequence.push(fibonacciSequence[i - 2] + fibonacciSequence[i - 1]);
  }

  return {
    sequence: fibonacciSequence,
    value: fibonacciSequence[getThisValue - 1],
  };
}

console.log(fibonacciIterative(10, 5));
console.log(fibonacciIterative(20, 19));
