function codeBracketCheckerStack(stringToCheck: string): boolean {
  let stack = [];

  for (let i = 0; i < stringToCheck.length; i++) {
    let char = stack[stack.length - 1];
    // console.log(stack);
    if (
      stringToCheck[i] === "(" ||
      stringToCheck[i] === "[" ||
      stringToCheck[i] === "{"
    ) {
      stack.push(stringToCheck[i]);
    } else if (
      (stringToCheck[i] == ")" && char == "(") ||
      (stringToCheck[i] == "}" && char == "{") ||
      (stringToCheck[i] == "]" && char == "[")
    ) {
      stack.pop();
    } else return false;
  }

  return stack.length ? false : true;
}

function isValid(s: string): boolean {

    let stack = [];
                let lastItem = "";

    for(let i=0;i<s.length;i++){
        lastItem = stack[stack.length-1]
        if(s[i]==="(" ||s[i]==="{" || s[i]==="[" ){
            stack.push(s[i])
            
        }
        
        else if((s[i]==="}" && lastItem==="{") || (s[i]==="]" && lastItem==="[") || (s[i]===")" && lastItem==="(") ){
            stack.pop();
        }
        
        else{
            return false;
        }
        
        console.log(stack)
        
    }
    
    return stack.length ? false: true;
};


console.log(isValid("{[]]()}"));
console.log(isValid("{[]](}{}{}}})}"));
console.log(isValid("{[]()}{}{}{}{[][][][]()}"));
console.log(isValid(""));
console.log(isValid("{[(])}"));
console.log(isValid("{}[]()(){}"));
console.log(isValid("([)]"));
console.log(isValid("[()]"));

