//Defination: object literals make it easy to quickly create objects with properties inside the curly braces.

//=============using Es6 featuee============
const display = (name,cls,stnd) => {
    return{
        name,
        cls,
        stnd
        
    }
}

display("Neeraja",10,"A")
console.log(display("Neeraja",10,"A"))

//==========Es5 =======features

const testing = (name,cls,stnd)=>{
    return{
        name: name,
        cls: cls,
        stnd: stnd
    }
}
testing("Sowji",11,"C")
console.log(testing("Sowji",11,"C"))