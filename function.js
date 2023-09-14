// REDUCE FUNCTION ALWAYS RETURNS A SINGLE VALUE

let numbers=[1,2,3,4,5]

//IT IS A HIGHER ORDER FUNCTION AND TAKE A CALL BACK FNCTION AS A PARAMETERE
//AND THE CALLBACK FUNCTION TAKE TWO PARAMETERS accumulator,current value

//first way
//if we donot pass the value of accumulator it initialize it with first element of array
let result=numbers.reduce(function(acc,val){
    // console.log(acc,val)
return acc+val
})
console.log(result) //relult=15

       //second way arrow function

let result1=numbers.reduce((acc,num)=>
{
    return acc+num
},10)
console.log(result1) //25

        //third way
let result2=numbers.reduce((acc,num)=>acc+num,20)
console.log(result2) //35

/////////////////////////////////////////////////////////////////

//REDUCE FUNCTION IN ARRAY OF OBJECTS
//here we assign the 49 rs registration fee for enrollment of course (initial value of accumulator)
const courses=[
    {
        name:"React js",
        price:3000
    },
    {
        name:"Java Script",
        price:4000
    },
    {
        name:"C++",
        price:2000
    },
    {
        name:"Ai",
        price:10000
    },
]
let totalPrice=courses.reduce((sum,course)=>sum+course.price,49)
console.log(totalPrice) //output 19049


//////////////////////////////////////////////////////////////////

// if you try to store the return value of forEach is always gives you undefined

let num1=[1,2,3,4,5,6,7]

num1.forEach(num=>num+1)

