function login(name){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log(name,"Success")
        },3000)
      resolve()

    })
       
}
function book(name){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log(name,"success")
        },2000)
        resolve()

    })
       
}
function snacks(name){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log(name,"success")
        },1000)
        resolve()

    })
}

async function display(){
    try{
    //  login().then
     await login("login")
     await book("book")
     await snacks("snacks")
    }
   catch(err){
        console.log(err)
    }
}

display()