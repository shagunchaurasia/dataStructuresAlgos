

function sockMerchant(n: number, ar: number[]) :number{
  let socksObj:any={};
  for (let i = 0; i < n; i++) {
    socksObj[ar[i]] = socksObj[ar[i]]? socksObj[ar[i]]+1 : 1;
    console.log(socksObj);
  }
  let socksPair = 0;
  for(let sock in socksObj){
    let pairs  = Math.floor(socksObj[sock]/2);
    socksPair += pairs;
    console.log(`Pair for ${sock} is ${pairs}`)
  }
  return socksPair;
}

console.log(sockMerchant(11,[1,2,2,3,2,3,2,2,2,3,4]));
