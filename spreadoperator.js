/*The javascript operator(...) allows us to quickly copy all or part of an existing array or object into another array or object*/


let One = [1,2,3];
let Two = [4,5,6];
let Combine = [...One,...Two];

console.log(Combine)

let obj= {a:2,b:2,c:"hello"}
let obj2={...obj}
console.log(obj2);