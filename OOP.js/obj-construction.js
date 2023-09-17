// //// Object literal {}
// const obj={
//     userName:"vishal singh",
//     login:true,
//     age:12,
//     userDetail:function(){
//         console.log(`${this.userName}`)
//     }
// }
// console.log(obj)
// console.log(obj.userName)
// console.log(obj.userDetail())

////CONSTRUCTION FUNCTION
function userData(userName,loggin,age,func)
{
this.userName=userName;
this.loggin=loggin
this.age=age
this.greeting=func
}
/* When we use new keywords it do many things
1 it creates a blank object which is clled instense
2 construction function call beacuse of new keyword
3  it injects all the properties and method in the new instance*/ 
const user1=new userData("vishal",true,12,greets)

console.log(user1)
console.log(user1.greeting())

function greets()
{
    console.log("hello how are you")
}

//it return either true or false after checking in simple it tell us abput the class belongs to some other class or not
console.log(user1 instanceof userData)
