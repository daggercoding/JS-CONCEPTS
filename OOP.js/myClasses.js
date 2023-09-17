//Here we use class keyword
class user{
    constructor(username,email,password)
    {
        this.username=username,
        this.email=email,
        this.password=password
    }
     //writing down a method
     generatepass()
     {
         return `THE ENCRYPTED PASSWORD for class IS :${this.password+Math.random()}`
     }
     changeuserName()
     {
        return `USERNAME is : ${this.username.toUpperCase()}`
     }
}
const pass=new user("vishal singh","reactvishal@gmail.com",12345);

console.log(pass.username);
console.log(pass.password);
console.log(pass.email);
console.log(pass.changeuserName());
console.log(pass.generatepass());

//behind the scene

function user1(name,email,password)
{
    this.name=name,
    this.email=email,
    this.password=password
}
user1.prototype.encrpt=function()
{
    return `THE ENCRYPTED PASSWORD for function IS :${this.password+Math.random()}`
}

const newPassword=new user1("vishal singh","reactvishal@gmail.com",12345)

console.log(newPassword.encrpt())