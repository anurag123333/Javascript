//types of datatypes in javascript

//   primitive and non-primitive - these are categorized based on call by value and call by reference 
    //  means how the data are stored in the memory and how you can access the data

//##primitive - 
//  7 categories: string,Number,boolean,null,undefined,symbol,Bigint

// ##which type of language is javascript -javascript is dynamically typed language

/* const score =100
   const scoreValue = 100.3

   const isLoggedIn = false
   const outsideTemp = null //null is null means nothing not zero
   let userEmail;


   const id = Symbol('123')
   const anotherId = Symbol('123')
   console.log(id ===anotherId);

   const bigNumber = 545454545454n - n for representing big int
   
   */

// ##non-primitive-reference type

// Array,objects,functions


const heros = ["shaktiman","naagraj","doga"];
let myobj = {
    name: "Anurag",
    age : 22,
}

const myfunction =function(){
    console.log("hello world");
}

console.log(typeof myfunction);
