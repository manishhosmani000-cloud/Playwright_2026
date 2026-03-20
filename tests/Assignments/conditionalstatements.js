//Odd-Even
function isOddOrEven(number){
    if (number%2===0) {
        console.log(number,"is Even number");
        
    }else{
        console.log(number,"is Odd number");
    }
}

let number=13
isOddOrEven(number)

//Conditional Statements

function launchBrowser(browserName){
     if (browserName==="chrome") {
        console.log("Supported Browser");
        
     } else {
        console.log("UnSupported Browser");
     }
}

let browserName="edge"
launchBrowser(browserName)

function runTests(testType){
switch (testType) {
    case "smoke":
       console.log("Smoke testing");
       break;

    case "sanity":
       console.log("Sanity testing");
       break;

    case "regression":
       console.log("Regression testing");
       break;


    default:
        console.log("Smoke testing");
        
        break;
}
}

runTests("sonity")