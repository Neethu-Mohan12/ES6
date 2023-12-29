//anonymus function
let ad=function()
{
    console.log("hello");
}
ad();

//arrow function
const sub=(a,b)=>a-b;
console.log(sub(5,6));

//arrow function multiline
let display=(c)=>{
    if(c=0)
    {
        console.log(`${c} id positive`);
    }
    else
    {
        console.log(`${c}is negative`);
    }
}
display(-55);