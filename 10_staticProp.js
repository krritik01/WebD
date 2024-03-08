class User{
    constructor(username){
        this.username=username
    }

    logMe(){
        console.log(`Username is ${this.username}`)
    }
//We use static if we do not want to give createId functionality to everyone
    static createId(){
        return `123`
    }
}

const ritik = new User("ritik")
// console.log(ritik.createId()) //it will not print because we use static in createId

class Teacher extends User{
    constructor(username, email) {
        super(username)
        this.email=email
    }
}
const Study= new Teacher("ritik", "ritik@gmail.com")

Study.logMe()
//console.log(Study.createId()) // it will also not inherit createId