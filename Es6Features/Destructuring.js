//Defination: By Using Destructing assignment it possible to unpack values from arrays or properties of object in to 
//distinct variable.

let a = {
    id : 1,
    name: "Neeraja",
    sub: "Js"
}
var x = a.id;
var y = a.name;
var z = a.sub;
console.log(x,y,z)
//================ using destructuring =======================

var b = {
    id: 2,
    name: "Lucky",
    sub: "Js"
}
var {id,name,sub} = b;
console.log(id,name,sub);