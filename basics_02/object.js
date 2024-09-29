// singleton

/* 
    when object is declear like literal then it is not made singleton but when 
    it is declear loke constructor then it is maked sinngleton
*/

//object declare
const mySymbol = Symbol("key1")
const  Jsuser ={
 
    user : "Anurag",
    age  : 20 ,
    [mySymbol]: "mykey1",
    location : "Amritsar",
    Email : "anurag@google.com",
    isLoggedIn : true ,
    LastLogin : ["monday","tuesday"]

}

// console.log(Jsuser.Email);
// console.log(Jsuser["Email"]);
// console.log(Jsuser[mySymbol]);

// Jsuser.Email = "anurag22123@gmail.com"
// Object.freeze(Jsuser)
// Jsuser.Email = "chhotu95@gmail.com"
// console.log(Jsuser);

//Adding Function

// Jsuser.greeting = function(){
//     console.log("hello js");
    
// }
// console.log(Jsuser.greeting());

// Jsuser.greeting2 = function(){
//     console.log(`hello user,${this.user}`);
    
// }

// console.log(Jsuser.greeting2());

//singleton object 

// const tinderuser = new Object()



const tinderuser ={}//non singleton

tinderuser.id = "123abc"
tinderuser.name = "sammy"
tinderuser.isLoggedIn = true


// console.log(tinderuser);

// const regularuser = {
//     email  : "sghjshghgh@hdh",
//     fullname:{
//         userfullname :{

//             firstName : "Anurag",
//             lastname : "kumar"

//         }
//     }

// }

// console.log(regularuser.fullname.userfullname.firstName);

//object combining

// const obj1 ={1:"a",2 :"b"}
// const obj2 = {3:"c",4 : "d"}
// // const obj3 ={obj1,obj2}
// // const obj3 =Object.assign({},obj1,obj2)
// const obj3 = {...obj1,...obj2}
// console.log(obj3);


// console.log(tinderuser);
// console.log(Object.keys(tinderuser));
// console.log(Object.values(tinderuser));
// console.log(Object.entries(tinderuser));
// console.log(tinderuser.hasOwnProperty('isLoggedIn'));



//object de-structuring

const course = {
    coursename : "JsHindi",
    price : "2000",
    teacher : "Anurag"
}

console.log(course.teacher);
//syntax
const {teacher:instructor}=course
console.log(instructor);

//Api 

//{
 //   "name" : "Anurag",
 //   "course" : "javascript",
  //  "price" : "free"
//}

