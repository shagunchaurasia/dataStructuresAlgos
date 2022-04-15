function factorialIterative(num: number){

    let result:number = 1;
    for(let i=num;i>0;i--){
        result = result * i;
    }

    return result;
}

console.log(factorialIterative(2))
console.log(factorialIterative(3))
console.log(factorialIterative(4))
console.log(factorialIterative(5))
console.log(factorialIterative(6))
console.log(factorialIterative(7))
console.log(factorialIterative(8))
console.log(factorialIterative(9))