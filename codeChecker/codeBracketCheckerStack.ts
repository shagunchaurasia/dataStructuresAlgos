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

console.log(codeBracketCheckerStack("{[]]()}"));
console.log(codeBracketCheckerStack("{[]](}{}{}}})}"));
console.log(codeBracketCheckerStack("{[]()}{}{}{}{[][][][]()}"));
console.log(codeBracketCheckerStack(""));
console.log(codeBracketCheckerStack("{[(])}"));
console.log(codeBracketCheckerStack("{}[]()(){}"));
console.log(codeBracketCheckerStack("([)]"));
console.log(codeBracketCheckerStack("[()]"));

