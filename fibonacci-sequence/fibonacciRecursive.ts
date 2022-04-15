/**
 *
 * @param getThisValue Print the value corresponding this index in Fibonacci Sequence
 * @returns
 */

function fibonacciRecursive(getThisValue: number): any {
  if (getThisValue < 2) {
    return getThisValue;
  }

  return (
    fibonacciRecursive(getThisValue - 1) + fibonacciRecursive(getThisValue - 2)
  );
}

console.log(fibonacciRecursive(10));
