function factorial(num: number) {
  let result: number = 1;
  
  for (let i = num; i > 0; i--) {
    result = result * i;
  }
  return result;
}

console.log(factorial(6));
console.log(factorial(8));
console.log(factorial(1000));
console.log(factorial(7));
console.log(factorial(12));

export default {};