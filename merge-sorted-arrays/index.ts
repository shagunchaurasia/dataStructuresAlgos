function mergeSortedArrays(arr1: Number[], arr2: Number[]): Number[] {
  let mergedArray = [...arr1, ...arr2];

  console.log(mergedArray);

  for (let i = 0; i < mergedArray.length; i++) {
    for (let j = 0; j < mergedArray.length; j++) {
      if (mergedArray[j] > mergedArray[j + 1]) {
        let temp = mergedArray[j + 1];
        mergedArray[j + 1] = mergedArray[j];
        mergedArray[j] = temp;
      }
    }
  }
  console.log(mergedArray);
return (mergedArray)
}

// console.log(mergeSortedArrays([0, 3, 4, 31], [4, 6, 30]));

// This function has Big o O(n^2) so we will implement another function to improve this



function mergeSortedArraysTwo(arr1:Number[], arr2:Number[]):Number[]{
    const mergedArray = [];
    let i = 1;
    let j = 1;
    let firstArrayElement = arr1[0];
    let secondArrayElement = arr2[0];

    if(arr1.length==0 || arr2.length==0){
        return arr1.length==0 ? arr2 :arr1
    }
    while(firstArrayElement || secondArrayElement){
        console.log(firstArrayElement, secondArrayElement)
        if(!secondArrayElement || firstArrayElement < secondArrayElement){
            mergedArray.push(firstArrayElement);
            firstArrayElement = arr1[i];
            i++;
        }
        else{
            mergedArray.push(secondArrayElement);
            secondArrayElement = arr2[j];
            j++;
        }
    }

    return mergedArray;
}
console.log(mergeSortedArraysTwo([ 3, 4, 31], [4, 6, 30]));




function mergeSortedArraysEs6(array1: number[], array2: number[]): number[] {
  let combinedArray = [...array1, ...array2].sort();
  return combinedArray;
}

function mergeSortedArraysAlternateSolution(array1: number[], array2: number[]): number[] {
  let mergedArray: number[] = [];
  let array1Counter = 0;
  let array2Counter = 0;

  while (mergedArray.length < array1.length + array2.length) {
    let array1Item = array1[array1Counter];
    let array2Item = array2[array2Counter];

    console.log("Comparing", array1Item, array2Item);
    if (array2Item == undefined || array1Item < array2Item) {
      mergedArray.push(array1Item);
      array1Counter++;
    } else {
      mergedArray.push(array2Item);
      array2Counter++;
    }
  }

  return mergedArray;
}



console.log(mergeSortedArraysEs6([1,2,3,4],[3,4,5,6,7,8]))
console.log(mergeSortedArraysAlternateSolution([1,2,3,4],[3,4,5,6,7,8]))

console.log(mergeSortedArraysAlternateSolution([3, 4, 31], [4, 6, 30]));
console.log(mergeSortedArraysAlternateSolution([3, 4, 31,81], [4, 6, 30,38,39,60,80]));
