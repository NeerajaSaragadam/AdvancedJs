 
//  function login(name,callback,x){
//      setTimeout(()=>{
//          console.log(name,"Success")
//          callback(x)
//      },1000)
//  }
//  function book(name,callback,x){
//      setTimeout(()=>{
//          console.log(name,"Success")
//          callback(x)
//      },3000)
//  }
//  function snacks(x){
//      setTimeout(()=>{
//          console.log(x,"Success")
//      },1000)
//  }

// const user = login("login",()=>{
//     book("Book",()=>{
//         snacks("Snacks")
//     })
// })

// =============== using promises =============

function login(name){
    return new Promise((resolve,reject) => {
           setTimeout(()=>{
              console.log(name,"Success")
              resolve()
           },1000)
    })
}
function book(name){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log(name,"success")
            resolve()
        },1000)
    })
}
function snacks(name){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log(name,"Suceess")
            resolve()
        },1000)
    })
}

login("login").then((res)=>{
    book("book").then((res)=>{
          snacks("snacks").then((res)=>{
              console.log("callback snacks")
          }).catch((err)=>{
              console.log(err)
          })
    }).catch((err)=>{
        console.log(err)
    })
}).catch((err)=>{
    console.log(err)
})