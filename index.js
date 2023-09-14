//object destructring
const naam={
    name1:"vishal",
    age:12,
    address:"mohali"}

for(let key in naam)
{
    console.log(`${key} :${naam[key]}`)
}


const arr=[
    {name:"deepanshu",age:24,gender:"male"},
    {name:"harshita",age:23,gender:"feamle"},
    {name:"vaibhav",age:26,gender:"transgender"}
]

let [{name:meranaam,gender:meragender },second,third]=arr
console.log(meranaam,meragender)
console.log(second)
console.log(third)




           // LEXICAL ENVIRONMENT

let age=13
function calculator()
{
    let age=23
    function add()
    {
        let age=33
        console.log("inside add",age)

        const subtract= ()=>{
            let age=43
            console.log("inside subtraction"+age)
        }
        subtract()
    }

    function multiplication()
    {
        let age=53
        console.log("inside multiplication"+age)
    }

    console.log("inside main function"+age)
    add()
    multiplication()
}
console.log("global scope"+age)

calculator();


      //  FUNCTION SCOPED and Block Scoped
       

function hello()
//THIS IS THE FUNCTION SCOPE FROM STARTING TO END OF THE FUNCTION
{
    if(true)
    //this is the block inside the function anything is inclosed by {} is block
    {
        var age=12;
        console.log("I AM INSIDE IF BLOCK"+age)
    }
     function add()
     {
        let age=18
        console.log("i am inside nested function"+age)
     }
     add();
    //if in above code we replace the var with let then the below stat will not execute it gives an error that the age is not defined
   console.log( "I AM INSIDE MAIN FUNCTION"+age)
}

hello();


//REST PARAMETER
//functon to add any numbers of value given in parameter
function addAll(...numbers)
{
    console.log(numbers)
    console.log(Array.isArray(numbers))

    let total=0;
for(let num of numbers)
{
 total+=num; 
}
return total
}
console.log(addAll(1,2,3,2,4,5,6,43,2,3,1,323,3,23,321,33,13,3213,23,123,23,231,231,43,4,345))

//Callback funtion
//when we call pass a function to another function then that term is known as call back function
function parent(callback)
{
        console.log("inside parent")
        child()

}
function child()
{
        console.log("i am child")    
}
parent(child)


const numbers=["vishal",1,4,3,7]
let reslt=[];
let output=numbers.forEach((num)=>
{
        reslt.push(num)
        
})
console.log(reslt)

