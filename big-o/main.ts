const nemo: string[] = ["nemo"];
const everyone: string[] = [
  "dory",
  "bruce",
  "marlin",
  "gill",
  "bloat",
  "nigel",
  "squirt",
  "darla",
  "hank",
  "nemo",
];
const largeArray = Array(100000).fill("nemo")

function findNemo(arrayGiven: string[]) {
  let t0 = Date.now();
  console.log(arrayGiven)
  for (let i = 0; i < arrayGiven.length; i++) {
    if (arrayGiven[i] === "nemo") {
      console.log("Found nemo");
    }
  }
  let t1 = Date.now();
  console.log("Call to find nemo took", t1 - t0, "milliseconds");
}

findNemo(nemo);
findNemo(everyone);
findNemo(largeArray);

// FindNemo has O(n) -> Linear time
