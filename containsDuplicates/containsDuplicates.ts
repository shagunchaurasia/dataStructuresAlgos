function containsDuplicate(nums: number[]): boolean {
  for (let i = 0; i < nums.length; i++) {
    if (nums.indexOf(nums[i], i + 1) > 0) return true;
  }

  return false;
}

console.log(containsDuplicate([1, 2, 3, 4, 5, 6, 7, 8, 1]));
console.log(containsDuplicate([1, 1, 3, 4, 5, 6, 7, 8]));
console.log(containsDuplicate([1, 2, 3, 4, 5, 8, 6, 7, 8]));
console.log(containsDuplicate([1, 2, 3, 4]));


function containsDuplicateBetter(nums: number[]): boolean {
  let map: any = {};
  let duplicateResult = false;
  for (let i = 0; i < nums.length; i++) {
    map[nums[i]] = map[nums[i]] ? map[nums[i]] + 1 : 1;
  }

  console.log(map);

  for (let value in map) {
    if (map[value] > 1) {
      return true;
    }
  }

  return duplicateResult;
}

console.log(containsDuplicateBetter([1, 2, 3, 4, 5, 6, 7, 8, 1]));
console.log(containsDuplicateBetter([1, 1, 3, 4, 5, 6, 7, 8]));
console.log(containsDuplicateBetter([1, 2, 3, 4, 5, 8, 6, 7, 8]));
console.log(containsDuplicateBetter([1, 2, 3, 4]));
