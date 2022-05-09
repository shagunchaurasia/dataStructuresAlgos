function topKFrequent(nums: number[], k: number) {
  let map: any = {};

  for (let i = 0; i < nums.length; i++) {
    map[nums[i]] = map[nums[i]] ? map[nums[i]] + 1 : 1;
  }

  console.log(map);
  let arrayToSort = [];
  for (const value in map) {
    arrayToSort.push([value, map[value]]);
  }

  console.log(arrayToSort);
  arrayToSort.sort((a, b) => b[1] - a[1]);

  let finalArray = [];
  for (let j = 0; j < k; j++) {
    finalArray.push(arrayToSort[j][0]);
  }
  return finalArray
}

console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2));
console.log(topKFrequent([1], 1));
