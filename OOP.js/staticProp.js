//static KEYWORD IS USED WHEN WE DO NOT WANT TO GIVE THE ACCESS OF ANT METHOD TO THE CHID EVEN AFTER INHERITANCE ALSO

//Without Static
class User{
    constructor(username)
    {
     this.username=username
    }
    generateid()
    {
        return Math.floor(Math.random()*1000)
    }
}
const newUser =new User ("Harish Singhania")
console.log(newUser.username)
console.log(newUser.generateid())

//With Static Keyword
class User1{
    constructor(username)
    {
     this.username=username
    }
   // if static is user the smamsung cannot generate new EMI no
  //static generateid()
    generateid()
    {
        return Math.floor(Math.random()*1000)
    }
}
const newUser1 =new User1 ("Vaihav Gupta")
console.log(newUser1.username)
console.log(newUser1.generateid())


// IN THE ABOVE EXAMPLE WE CREATED AN INSTANCE IF CLASS NOW LETS EXTEND THE CLASS

class Mobile{
    constructor(username,modelNo)
    {
        this.username=username
        this.modelNo=modelNo
        // this.modelNo-=modelNo
    }
   // if static is user the smamsung cannot generate new EMI no
     //static NewEmino()
    NewEmino()
    {
        return `New Emi No is : ${Math.floor(Math.random()*10000000000000)}`
    }
}

class Samsung extends Mobile{
    constructor(username,modelNo,price)
    {
        super(username,modelNo) 
        this.price=price
    }
    dispayMobileDetail()
    {
      console.log(`The name of mobile is ${this.username}`)
      console.log(`The Modelno of mobile is ${this.modelNo}`)
      console.log(`The price of mobile is ${this.price}`)
    }
}

const buyer=new Samsung("Samsung","5G",20000)
buyer.dispayMobileDetail();
console.log(buyer.NewEmino())