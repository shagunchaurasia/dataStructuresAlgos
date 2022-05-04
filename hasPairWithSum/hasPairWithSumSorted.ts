/**
 *
 * @param sortedArray
 * @param sumExpected
 * @returns boolean value - True if expected sum is found else returns false
 * @complexity - O(n^2)
 */
function hasPairWithSumBrute(
  sortedArray: number[],
  sumExpected: number
): boolean {
  for (let i = 0; i < sortedArray.length; i++) {
    for (let j = 1; j < sortedArray.length; j++) {
      if (sortedArray[i] + sortedArray[j] == sumExpected) {
        return true;
      }
    }
  }
  return false;
}

console.log(hasPairWithSumBrute([1, 2, 3, 9], 8));
console.log(hasPairWithSumBrute([1, 2, 4, 4], 8));

function hasPairWithSum(sortedArray: number[], sumExpected: number): boolean {
  let lowestPointer = 0;
  let highestPointer = sortedArray.length - 1;

  while (lowestPointer < highestPointer) {
    let sumCalculated =
      sortedArray[lowestPointer] + sortedArray[highestPointer];
    if (sumCalculated == sumExpected) {
      return true;
    }
    if (sumCalculated < sumExpected) {
      lowestPointer++;
    }
    if (sumCalculated > sumExpected) {
      highestPointer--;
    }
  }
  return false;
}

console.log(hasPairWithSum([1, 2, 3, 9], 8));
console.log(hasPairWithSum([1, 2, 4, 4, 6, 9], 8));



function hasPairWithSumSet(sortedArray: number[], sumExpected: number): boolean {

    const mySet = new Set();
    const length = sortedArray.length;

    for(let i=0; i<sortedArray.length; i++){
        if(mySet.has(sortedArray[i])){
            return true;
        }
        mySet.add(sumExpected - sortedArray[i])
    }

    return false;
}