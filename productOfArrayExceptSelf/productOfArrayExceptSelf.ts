function productExceptSelfBrute(nums: number[]): number[] {
  let finalArray = [];
  for (let i = 0; i < nums.length; i++) {
    let product = 1;
    for (let j = 0; j < nums.length; j++) {
      if (i != j) {
        product = product * nums[j];
      }
    }
    finalArray.push(product);
  }
  return finalArray;
}

function productExceptSelf(nums: number[]): number[] {
  let finalArray: number[] = [];
  let product = 1;
  for (let i = 0; i < nums.length; i++) {
    finalArray[i] = product;
    console.log(finalArray);
    product *= nums[i];
  }

    console.log("======");

  product = 1;
  for (let j = nums.length - 1; j >= 0; j--) {
    finalArray[j] *= product;
    console.log(finalArray);

    product *= nums[j];
  }
  return finalArray;
}

console.log(productExceptSelf([1, 2, 3, 4]));
