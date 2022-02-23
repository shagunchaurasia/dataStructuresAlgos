const offensiveWords = ["demon", "gun"];
const userList = [
  {
    id: "e3d46de8c7194cb1a52345195c15dc42",
    name: "Yui",
    description: "I do house cleaning work. 10 years of experience.",
    location: "tokyo",
    jobType: "housecleaning",
  },
  {
    id: "e3d46de8c7194cb4532275195c56dc08",
    name: "Ai",
    description: "My partner and I clean an average of ten houses a week.",
    location: "tokyo",
    jobType: "housecleaning",
  },
  {
    id: "e3d46de8c7194cb1a32275195c15dc01",
    name: "Kenta",
    description:
      "Housecleaning Gun is what people do to remove mess, trash, and dirt from houses and put things where they belong so the house looks neat.",
    location: "tokyo",
    jobType: "housecleaning",
  },
  {
    id: "e3d46de8c7494cb1a322751v5c1fdc47",
    name: "Haruto",
    description: "I provide interactive English lessons.",
    location: "tokyo",
    jobType: "english-lesson",
  },
  {
    id: "e3d46df8c7194cb1a32275865b15dc83",
    name: "Sota",
    description:
      "Need your home, house, or apartment cleaned? I am the right person",
    location: "osaka",
    jobType: "housecleaning",
  },
  {
    id: "e3e46de8c7194cb1a32582935c15dca1",
    name: "Yuto",
    description: "K-12, business, and conversational English lessons",
    location: "osaka",
    jobType: "english-lesson",
  },
  {
    id: "e3d45he8c7194cb1at2245195c15j497",
    name: "Mean Person",
    description:
      "I sometimes carry a gun with me when I go teach an English class.",
    location: "tokyo",
    jobType: "english-lesson",
  },
];

function getTopPros(users, jobType, location, limit) {
  const topPros = [];
  if (limit == 0) {
    return topPros;
  }
  // find the user objects
  for (const u of users) {
    // check pro
    if (
      u["jobType"].toLowerCase() === jobType.toLowerCase() &&
      u["location"].toLowerCase() === location.toLowerCase()
    ) {
      let shouldSkipThisPro = false;
      for (const w of offensiveWords) {
        if (
          u["description"].toLowerCase().split(" ").includes(w.toLowerCase())
        ) {
          shouldSkipThisPro = true;
          continue;
        }
      }
      if (!shouldSkipThisPro) topPros.unshift(u);
    }
  }
  // return the pros matching the condition
  return topPros.slice(0, limit);
}

console.log(getTopPros(userList, "housecleaning", "tokyo", 1));
