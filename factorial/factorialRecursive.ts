function factorialRecursive(num:number):number{

    if(num===2){
        return 2;
    }
    return num * factorialRecursive(num-1) 

}

console.log(factorialRecursive(5))
console.log(factorialRecursive(3))
console.log(factorialRecursive(10))
console.log(factorialRecursive(8))
console.log(factorialRecursive(9))
console.log(factorialRecursive(11))