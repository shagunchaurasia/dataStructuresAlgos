function fib(n) {
  return n <= 1 ? n : fib(n - 1) + fib(n - 2);
}

console.log(fib(9));
console.log(fib(6));
console.log(fib(0));
console.log(fib(1));
