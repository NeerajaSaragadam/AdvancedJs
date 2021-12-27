// defination : the filter() methods creates a new array with all elements that passes the test implemented by the 
// provided function.

var words = ["neeraja","laxmanRao","Jasuu","binu","bobby","tinku"]
var ex = words.filter(word => word.length > 7 )
console.log(ex,words)
var obj 
var objex = [obj = {
   "id" : 1,
   "name" : "Neeraja"
},
{
    "id" : "",
    "Name": ""
}]
 var objex1 = objex.filter(ex => ex.id !== "")
console.log(objex1)
console.log(objex)