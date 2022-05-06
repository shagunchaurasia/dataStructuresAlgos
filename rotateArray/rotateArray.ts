function rotate(nums: number[], k: number): number[] {
    
  for (let i = 0; i < k; i++) {

    let lastItem = nums.pop()!;
    nums.unshift(lastItem)
  }

  return nums;
}


console.log(rotate([1, 2, 3, 4, 5, 6, 7],3));