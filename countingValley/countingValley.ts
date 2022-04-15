function countingValleys(steps:number, path:string) {
    // Write your code here
    let valleyCount = 0;
    let mountainCount = 0;
    let seaLevel = 0;
    for(let i=0; i<steps; i++){
        
        if(path[i]=="U"){
            mountainCount++;
            seaLevel++;
        }
        else{
            valleyCount++;
            seaLevel--;
        }
        
           
    }
    
    
    console.log(`sea ${seaLevel}. mountain ${mountainCount}. valley ${valleyCount}`)

}

let steps = 8;
let path = "UDDDUDUU";
countingValleys(steps, path);