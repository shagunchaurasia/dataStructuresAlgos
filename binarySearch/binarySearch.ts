function search(nums: number[], target: number): number {
  let first = 0;
  let last = nums.length - 1;
  let result = -1;
  while (first <= last) {
    let middle = Math.floor((first + last) / 2);

    console.log(`first ${first} last ${last} middle ${middle}`);
    if (target > nums[middle]) {
      first = middle;
    }
    if (target < nums[middle]) {
      last = middle;
    }

    if (target == nums[middle]) {
      return middle;
    }
  }

  return -1;
}

console.log(search([-1, 0, 3, 5, 9, 12], 9));
