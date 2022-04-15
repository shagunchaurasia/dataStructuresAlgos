//Create a function that reverses string
//Eg - "Hi My Name is Shagun"
//Output - "nugahS si emaN yM iH"


function reverseString(givenString:String ):String{

    if(!givenString || givenString.length<2 || typeof givenString!=='string'){
        return "Please enter a bigger string";
    }
    let resultStringArray = [];
    for(let i=0; i<givenString.length; i++){
        resultStringArray.push(givenString[givenString.length-1-i]);
    }
    return resultStringArray.join("");
}

//One line function 
function reverseStringTwo(givenString:String):String{
    return givenString.split('').reverse().join("");
}



const demoString:String = "My Name is Shagun";
console.log(reverseString(demoString));
console.log(reverseStringTwo(demoString))
