function makeHuman(username, email){
    this.username=username;
    this.email=email;
}

makeHuman.prototype.printMyname=function(){
    console.log(this.username)
}

const human1=new makeHuman("ritik", "krritik@gamail.com")
const human2=new makeHuman("shailendra", "shailendra@gamail.com")
console.log(human1)
console.log(human2)


// New version of ES2015
// class makeHuman{
//     constructor(username, email) {
//         this.username=username;
//         this.email=email
//     }
//     printMyname(){
//         console.log(this.username)
//     }
// }
