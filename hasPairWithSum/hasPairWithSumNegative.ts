// Consider an array that has both positive and negative numbers. Then, write a program to find all pairs of numbers whose sum is equal to a number assigned manually( say given sum)

function maxSubArray(nums: number[]): number {
  let maximumSumPossible = 0;

  if (nums.length == 1) {
    return nums[0];
  }

  for (let i = 0; i < nums.length; i++) {
    console.log("Changing pointer to ", nums[i]);
    let sum = nums[i];

    if (sum > maximumSumPossible) {
      console.log("Reached here");
      maximumSumPossible = sum;
    }

    for (let j = i + 1; j < nums.length; j++) {
      console.log("Adding ", nums[j], " to existing sum ", sum);
      sum += nums[j];

      if (sum > maximumSumPossible) {
        maximumSumPossible = sum;
      }
    }
  }

  return maximumSumPossible;
}

// console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
// console.log(maxSubArray([1]));
// console.log(maxSubArray([-2, 1]));
console.log(maxSubArray([-2, -1]));
