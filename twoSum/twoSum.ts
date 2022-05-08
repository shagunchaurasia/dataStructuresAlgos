function twoSumBrute(nums: number[], target: number): number[] {
  let resultArray: number[] = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] == target) {
        console.log(i, j);
        resultArray.push(i, j);
        return resultArray;
      }
    }
  }
  return resultArray;
}

//This solution works only after sorting
function twoSum(nums: number[], target: number): number[] {
  let lowest = 0;
  let highest = nums.length - 1;
  let initialArray = [...nums];
  nums.sort((a, b) => a - b);

  let result: number[] = [];
  while (lowest <= highest) {
    let sum = nums[lowest] + nums[highest];
    console.log("lowest", lowest, "highest", highest, "sum", sum);
    console.log("result", result, "nums", nums);
    if (sum == target) {
      result.push(nums[lowest], nums[highest]);
    //   console.log("RESULT", result);
    //   console.log("Initial Array", initialArray);
      console.log(initialArray.indexOf(result[0]))
      console.log(initialArray.indexOf(result[1]));
      return [initialArray.indexOf(result[0]), initialArray.indexOf(result[1])];

    //   return result;
    }
    if (sum < target) {
      lowest++;
    }
    if (sum > target) {
      highest--;
    }
  }
  return [initialArray.indexOf(result[0]), initialArray.indexOf(result[1])];
}

console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3, 2, 4], 6));
