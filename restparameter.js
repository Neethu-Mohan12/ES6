// the rest parameter syntax allows a function to accept an indefinite number of arguments as an array
function sum(...numbers){
    let result=0;
    for (let i=0;i<numbers.length;i++)
    {
        result+=numbers[i];
    }
    return result;    
}
console.log(sum(1,2,3,4,5,6,7,8,9,10,11,12));
console.log(sum(4,5,6,7));
console.log(sum(3,8,1));
console.log(sum(1));