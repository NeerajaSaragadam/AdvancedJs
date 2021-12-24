// function greet(name,callback){
//     console.log("Hii");
//     callback(name)
// }
// function callme(Name){
//     console.log("hloooo",Name)
// }
// setTimeout(greet,2000,'Neeraja',callme)
 //greet("Neeraja")
 //callme()
// =======================================================================
//  function greet(callback,name){
//      setTimeout(()=>{
//        console.log("heloooooooo") 
//        callback(name)
//      },2000)
    
//  }

//  function sayname(name){
//      console.log("hloooo",name)
//  }

//  greet(()=>{
//      sayname("Neeraja")
//  })
//========================================= youtube example ================================


// setTimeout(function(){
//     console.log("timer")
// },2000)

// function x(callback){
//     console.log("x")
//     callback()
// }

// x(function y(){
//     console.log("y")
// })

// document.getElementById("clickme").addEventListener("click",function x(){
//     console.log("button clicked")
// })

//=======================tejashree=====================

function login(name,callback,bknme){
    setTimeout(()=>{
       console.log(name,"success")
       callback(bknme)
    },1000)
}
function book(x,callback,y){
    setTimeout(()=>{
        console.log( x,"succssfilly")
        callback(y)
    },1000)
}
function snacks(y){
    setTimeout(()=>{
        console.log(y, "bought sucess")
    },1000)
}

const user = login("login",()=>{
    book("books",()=>{
        snacks("snacks")
    })
})