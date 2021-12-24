console.log("first")
console.log("second")
example()
console.log("third")
setTimeout(()=>{
    console.log("fourth")
},1000)
console.log("fifth")
console.log("sixth")

function example(){
    console.log("seventh")
}

