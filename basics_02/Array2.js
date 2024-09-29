const marvel_heros = ["thor","ironman","spiderman"]
const de = ["superman","flash","batmsn"]

// marvel_heros.push(de)
// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(de)
// console.log(allHeros);

const all_new_heros = [...marvel_heros, ...de]
// console.log(all_new_heros)

const another_array = [1,2,3,[4,5,6],7,[8,9,[10,11]]]
const real_another_array = another_array.flat(3)
console.log(real_another_array);

console.log(Array.isArray("Anurag"));
console.log(Array.from("Anurag"));
console.log(Array.from({name:"anurag"}));//interesting

let score1 = 100
let score2 = 100
let score3 = 100

console.log(Array.of(score1,score2,score3));



 
