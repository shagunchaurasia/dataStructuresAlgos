function sortedSquares(nums: number[]): number[] {
  const squaredArray = [];

  for (let i = 0; i < nums.length; i++) {
    squaredArray.push(nums[i] * nums[i]);
  }

  console.log(squaredArray);
  return squaredArray.sort((a, b) => a - b); //(Complexity of O(n log(n)))
}

console.log(sortedSquares([-4, -1, 0, 3, 10]));
console.log(sortedSquares([-15, -7, -3, 2, 3, 11]));

function sortedSquaresImproved(nums: number[]): number[] {
  const squaredArray = new Array(nums.length);

  let left = 0;
  let right = nums.length - 1;
  let sorted = right;
  while (left <= right) {
    let square_left = nums[left] * nums[left];
    let square_right = nums[right] * nums[right];
    if (square_right > square_left) {
      squaredArray[sorted] = square_right;
      right--;
    } else {
      squaredArray[sorted] = square_left;
      left++;
    }
    sorted--;
  }

  return squaredArray; //This has a complexity of O(n) since we are looping through numbers only once and sorting it simultaneously
}

console.log(sortedSquaresImproved([-4, -1, 0, 3, 10]));
console.log(sortedSquaresImproved([-15, -7, -3, 2, 3, 11]));
