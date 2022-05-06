function comparisonFunction(X:number,Y:number){
    let XY = X.toString()+Y.toString();
    let YX = Y.toString()+X.toString();

    return parseInt(YX)-parseInt(XY)
}
function largestPossibleNumber (num:number[]):number{
    let result = 0;

    let sortedArray = num.sort(comparisonFunction);

    console.log(sortedArray)    

    return + sortedArray.join("")
    
}


console.log(largestPossibleNumber([1, 61, 9, 0]));
console.log(largestPossibleNumber([54, 546, 548, 60]));

