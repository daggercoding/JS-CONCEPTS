////created promiss
new Promise(function(resolve,reject)
{
    setTimeout(function(){
        console.log("vishal singh")
        resolve();
    },1000)
}).then(function(data)
{
    console.log("hello vishal singh")
})

//we can simple store the promise in a variable
const data=new Promise(function(req,rej)
{
    setTimeout(()=>{
        req({name:"vishal singh",age:24})
    },1000)
})
//you can not the return the value like this so for this we have to do channing
const names=data.then((user)=>{
    return user.name
})
console.log(names)

//chainng of then

const data1=new Promise(function(res,rej){
 setTimeout(()=>{
    let error=true
    if(!error)
    {
      res({name:"vishal singh raj",age:24})  
    }
    else{
        rej(`Err:Something Went Wrong`)
    }
 },1000)
})

data1
.then(data=>data)
.then(data=>data.name)
.catch(error=>console.log(error))
.finally(()=>{
    console.log("ye to chalega hi chalega")
})


//doing this with Async

const promise1=new Promise(function(res,rej){
    setTimeout(()=>{
       let error=true
       if(!error)
       {
         res({name:"vishal singh raj",age:24})  
       }
       else{
           rej(`Err:Something Went Wrong`)
       }
    },1000)
   })

   async function positive12()
   {
    try{
    const res=await promise1;
    console.log(res)
    }catch(error)
    {
    console.log(`Error is :${error}`)
    }
   }
   positive12();

//ASYNC FUNCTION
async function all()
{
try{
   const res=await fetch("https://jsonplaceholder.typicode.com/posts")
   const data=await res.json();
   console.log(data)
}   
catch(error)
{
    console.log(error)
}
}
all();

fetch("https://jsonplaceholder.typicode.com/posts")
.then(res=>{
    return res.json()
})
.then(data=>{
    console.log(data)
})
.catch(error=>{
    console.log(error)
})
