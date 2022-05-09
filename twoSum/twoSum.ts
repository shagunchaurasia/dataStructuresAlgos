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

function twoSum(nums: number[], target: number) {
  let hashMap: any = {};

  for (let i = 0; i < nums.length; i++) {
    let compliment = target - nums[i];
    if(hashMap[nums[i]]>=0){
      return([hashMap[nums[i]], i])
    }
    
    hashMap[compliment] = i;
  }
  
}

console.log(twoSum([2, 7, 11, 15], 9));
// console.log(twoSum([3, 2, 4], 6));
