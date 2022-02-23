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

