function userName(username)
{
 this.username=username
}

function user(username,email,number)
{
    /*you can not simplily write like this
    userName(username) you wll have to attach bind*/
    userName.call(this,username)
    this.email=email
    this.number=number
}
const newUSer= new user("vishal singh","reactvishal@gmail.com",12)
console.log(newUSer)