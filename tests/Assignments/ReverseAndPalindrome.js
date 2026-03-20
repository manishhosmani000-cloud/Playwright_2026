let name="Manish"
let revname=name.split("").reverse().join("");
console.log(revname);

let Pname="madam"
let reversename=Pname.split("").reverse().join("");
console.log(reversename);

if(Pname===reversename){
  console.log("Palindrome");
  
}else{
  console.log("Not Palindrome");
}

//without reverse

let str = "Rutu";
let reversed = "";

for (let i = str.length - 1; i >= 0; i--) {
  reversed += str[i];
}

console.log(reversed);