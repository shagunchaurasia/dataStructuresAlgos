function groupAnagrams(strs: string[]): string[][] {
  let hash: any = {};

  for (let i = 0; i < strs.length; i++) {
    let letters = strs[i].split("").sort().join();
    if (hash[letters]) {
      hash[letters].push(strs[i]);
    } else {
      hash[letters] = [strs[i]];
    }
  }

  return(Object.values(hash))
}

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
