function findNumbers(nums: number[]): number {
  let evenCountNumbers = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i].toString().length % 2 == 0) {
      evenCountNumbers++;
    }
  }
  return evenCountNumbers;
}

// console.log(findNumbers([12, 345, 2, 6, 7896]));
// console.log(findNumbers([555, 901, 482, 1771]));

function findNumbersAlternate(nums: number[]): number {
  let evenCountNumbers = 0;
  for (let i = 0; i < nums.length; i++) {
    // if (nums[i]/ 10 == 0) {
    //   evenCountNumbers++;
    // }
    console.log(nums[i] / 10);
  }
  return evenCountNumbers;
}
console.log(findNumbersAlternate([12, 345, 2, 6, 7896]));
console.log(findNumbersAlternate([555, 901, 482, 1771]));
