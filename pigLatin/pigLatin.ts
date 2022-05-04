function pigLatinize(sentence: string): string {
  const wordsArray = sentence.split(" ");
  const finalPigLatinArray: string[] = [];
  for (let i = 0; i < wordsArray.length; i++) {
    if (
      wordsArray[i].charAt(0).toLocaleLowerCase() == "a" ||
      wordsArray[i].charAt(0).toLocaleLowerCase() == "e" ||
      wordsArray[i].charAt(0).toLocaleLowerCase() == "i" ||
      wordsArray[i].charAt(0).toLocaleLowerCase() == "o" ||
      wordsArray[i].charAt(0).toLocaleLowerCase() == "u"
    ) {
      finalPigLatinArray.push(wordsArray[i] + "-way");
    } else {
      finalPigLatinArray.push(
        wordsArray[i].slice(1) + "-" + wordsArray[i].charAt(0) + "ay"
      );
    }
  }

  return finalPigLatinArray.join(" ");
}

console.log(pigLatinize("pig"));
console.log(pigLatinize("pig latin"));
console.log(pigLatinize("pig Latin"));
console.log(pigLatinize("Pig Latin is a farcical language."));
console.log(pigLatinize("My fave song is 99 luftballoons"));
console.log(
  pigLatinize(
    "I've been wondering - what is the answer?!?!? How will we know it's correct?"
  )
);
console.log(
  pigLatinize(
    "Pig Latin is used in schools to teach language constructs. It's helpful for people to learn new things!"
  )
);
