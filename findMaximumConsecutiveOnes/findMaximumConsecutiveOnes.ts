function findMaxConsecutiveOnes(nums: number[]): number {
  let objectWithCount = {1:0};
  let maxConsecutiveCount = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == 1) {
      objectWithCount[1] = objectWithCount[1] + 1;
    } else {
      objectWithCount[1] = 0;
    }

    console.log("After evaluating ",nums[i],objectWithCount[1])

    if (objectWithCount[1] > maxConsecutiveCount) {
      maxConsecutiveCount = objectWithCount[1];
    }
  }

  return maxConsecutiveCount;
}

// console.log(findMaxConsecutiveOnes([1, 1, 0, 1, 1, 1]));
// console.log(findMaxConsecutiveOnes([1, 0, 1, 1, 0, 1]));
console.log(findMaxConsecutiveOnes([1, 1, 0, 1]));