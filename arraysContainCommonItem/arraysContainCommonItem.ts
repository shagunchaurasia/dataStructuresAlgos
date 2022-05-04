/**
 *
 * @param array1
 * @param array2
 * @returns
 * @complexity - This has complexity of O(n^2) since it has a nested loop
 */
function arraysContainCommonItemsBrute(
  array1: string[],
  array2: string[]
): boolean {
  for (let i = 0; i < array1.length; i++) {
    for (let j = 0; j < array2.length; j++) {
      if (array1[i] == array2[j]) {
        return true;
      }
    }
  }
  return false;
}
const array1 = ["a", "b", "c", "x"];
const array2 = ["z", "y", "x"];

const array3 = ["a", "b", "c", "x"];
const array4 = ["z", "y", "i"];

console.log(arraysContainCommonItemsBrute(array1, array2));
console.log(arraysContainCommonItemsBrute(array3, array4));

/**
 *
 * @param array1
 * @param array2
 * @returns
 * @complexity - This has complexity of O(n) + O(n)=>considering both arrays have similar length
 * */
function arraysContainCommonItems(array1: string[], array2: string[]): boolean {
  let map: any = {};
  for (let i = 0; i < array1.length; i++) {
    if (!map[array1[i]]) {
      map[array1[i]] = true;
    }
  }
  for (let j = 0; j < array2.length; j++) {
    if (map[array2[j]] ) return true;
  }

  return false;
}

console.log(arraysContainCommonItems(array1, array2));
console.log(arraysContainCommonItems(array3, array4));
