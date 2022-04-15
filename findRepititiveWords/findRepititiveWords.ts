let stringDummy = "dummy is dummy the for get now this is not done when this will not be there is is is is if if if if if we need it constructor this wont matter in a couple of years when everything dies oblivion is inevitable love dies relationships change but we move on on on on on on on on on on on on on on on on on on ";


function findRepititiveWords(sentence: string){

    let wordArray = sentence.split(" ");
    let wordObject:any = {};

    for(let i in wordArray){
        let word = wordArray[i].toLocaleLowerCase();
        wordObject["_"+word] = "_"+word in wordObject? wordObject["_"+word]+1 : 1;
    }
    //Sort the values of the object created
    const frequencyArray = Object.keys(wordObject).map(key=>[key, wordObject[key]]);
    frequencyArray.sort((a,b)=> b[1]-a[1])
    return frequencyArray.splice(0,20);
}

console.log(findRepititiveWords(stringDummy))