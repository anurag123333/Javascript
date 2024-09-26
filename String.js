/*
--string---

const name = "anurag"
const marks = 300

console.log(name + marks +"value");// this is old style of concatination of string

instead of this we use backtics in modern days string interpolation in which ew are making a placeholder to inject value directly
example{

console.log(`hello my name is ${name} and my marks is ${marks}`)
}

//string declare 2nd method



*/

const gameName = new String ('anurag-kum')
console.log(gameName[0]);
console.log(gameName.length);
console.log(gameName.toUpperCase())
console.log(gameName.charAt('5'));
console.log(gameName.indexOf('g'));

const newString = gameName.substring(1,5)
console.log(newString);

const anotherString = gameName.slice(-10,5)
console.log(anotherString);

const newStringOne = "   hihhgn  "
console.log(newStringOne);

console.log(newStringOne.trim());//it works only on white spaces and line terminator(/n line)

const url = "https://anurag.com/chhotu%20kumar"
console.log(url.replace('%20','-'));

//questioning in string
console.log (url.includes('anurag'))

//convert in array

console.log(gameName.split('-'));



