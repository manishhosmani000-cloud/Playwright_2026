//---Escape Sequence---:

// Single Quote
let manish='Manish, It\'s a playwright!'
console.log(manish);

// Double Quote
let mom1="Manish, This is \"selenium\" tool!"
console.log(mom1);

// \n (To go to new line)
let play="I love to play\n cricket"
console.log(play);

// \t (For adding space)

let play2="I love to play\tcricket"
console.log(play2);

// ---Concatenation---

//Using concat() method

let testCase="Create a new testcase"
let testCaseId=178

let resultConcat=testCase.concat(testCaseId)
console.log(resultConcat);

// Using + :

letresultplus=testCaseId+"-"+testCase+"passed execution"
console.log(letresultplus);


// ---Template literal--- (Gives input at runtime/calling time), Denotation -> `${}`

function funName(x){
  let output=`There are ${x} testcases`
  console.log(output);
  
}

funName(23)

//Taking value from terminal:

let inputValue=process.argv[2]
console.log("Hii team"+" "+inputValue);


//---Length Property--- (To find length of string)

let course="Plawright"
console.log("Length of course is"+course.length);



// ---charAt()--- (To find character at specific index)

console.log(`The charAt of 3 of given string is ${course.charAt(3)}`);


// ---indexOf()--- (To find index of character mentioned, checks for first character)

console.log(`The index of 'a' of given string is ${course.indexOf('a')}`);



//---slice---

let tool="selenium"

letoutputslice=tool.slice(1,4)
console.log(letoutputslice);

letoutputslice=tool.slice(4,-1)  // It prints from index 4 to -2 and doesn't print -1
console.log(letoutputslice);

letoutputslice=tool.slice(4,1)   //If start index > end index, it gives empty string
console.log(letoutputslice);   


//--substring---

letoutputsubstring=tool.substring(1,4)
console.log(letoutputsubstring);        //Normal as slice


letoutputsubstring=tool.substring(4,1)
console.log(letoutputsubstring);           //When start index is greater it swaps internally and gives 4,1 output

letoutputsubstring=tool.substring(4,-2)
console.log(letoutputsubstring);          // Negative values are ignored here, so it prints from 0 to 3 index

letoutputsubstring=tool.substring(4)
console.log(letoutputsubstring);         //Prints from index 4 to end

