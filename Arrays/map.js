var ex = [1,2,3,4,5,67]
var ex1 = ex.map(e => e+1)
console.log(ex1)

var obj 
var obj1 = [obj = {
    "id": 1,
    "bookname": "apple",
    "price" : 30
},{
    "id" : 2,
    "bookname" : "orange",
    "price" : 30
},{
    "id" : 3,
    "bookname" : "grapes",
    "price" : 50
},{
    "id" : "",
    "bookname" : "",
    "price" : ""
}]

var obj3 = obj1.filter(ob => ob.bookname !== "").map(ob => ob.bookname)
console.log(obj3)