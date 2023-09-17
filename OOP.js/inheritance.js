class User {
    constructor(username)
    {
        this.username=username
    }
    loggedIn()
    {
        console.log(`${this.username}: LOGGED IN SUCCEFULLY`)
    }
}
 class Teacher extends User{
    constructor(username,email,uniqueId)
    {
        super(username)
        this.email=email
        this.uniqueId=uniqueId
    }
    addCourse()
    {
    console.log(`the new course is added by ${this.username}`)
    }
 }

 //NOW WE MAKE A NEW INSTANCE OF CLASS TEACHER SO WE HAVE ALL THE PROPETIES OF TEACHER AS WELL AS THE USER BECAUSE TEACHER EXTENDS THE PROPERTY OF USER CALLS
 const student=new Teacher("vishal singh","random@gmail.com",Math.round(Math.random()*100000))

 console.log(student.uniqueId)
 student.addCourse();

 //FOR EXAMPLE IF WE MAKE ANOTHER INSTANCE OF CLASS USER THEN THE NEW INSTANCE DO NOT HAVE THE PROPERTIES OF TEACHER CLASS LETS HAVE A LOOK

 const user1=new User("Arijit singh","random@mail",124231)
//it cn easily access the property of User class but it do not have a single property of Teacher class
 console.log(user1.username)
 user1.loggedIn()

 //trying to acess the Teacher class properties evry output is undefined
 console.log(user1.email)
 console.log(user1.uniqueId)
 console.log(user1.username)





