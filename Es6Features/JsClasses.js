 this.firstnames = "Sowji"
 this.lastnames = "Revu"

class User{
    constructor(firstname,lastname){
        this.firstnames = firstname
       this.lastnames = lastname
    }

    display = () => {
        console.log(`this is to display ${this.firstnames} and ${this.lastnames}`)
    }
    display1 = () => {
        console.log(`this is to display ${this.firstnames} and ${this.lastnames}`)
    }
}
display3 = (firstnames,lastnames) => {
    console.log(`this is to display ${this.firstnames} and ${this.lastnames}`)
}

let clsobj = new User("Neeraja","Saragadam")
clsobj.display();
clsobj.display1();
display3("Jasuuu","RRR");