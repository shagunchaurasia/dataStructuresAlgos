function isAnagram(s: string, t: string): boolean {
  //If strings are same
  if (s === t) {
    return true;
  }
  //If length of strings is not same then they cannot be an anagram
  if (s.length != t.length) {
    return false;
  }

  //Create map of first word and check occurence of letters
  let wordMapS: any = {};
  for (let i = 0; i < s.length; i++) {
    wordMapS[s[i]] = wordMapS[s[i]] ? wordMapS[s[i]] + 1 : 1;
  }
  console.log(wordMapS);

  for (let j = 0; j < t.length; j++) {

    if(!wordMapS[t[j]]) return false;
    wordMapS[t[j]]--

  }

  console.log(wordMapS);

  return true;
}

console.log(isAnagram("anagram", "nagaram"));
