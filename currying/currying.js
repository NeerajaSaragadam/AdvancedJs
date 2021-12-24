var add = function(a){
    return function(b){
        return function(c){
        return a+b+c
    }
}
}
var addtofivesix = add(5)(6)
sum = addtofivesix(1)
sum1 = addtofivesix(2)

console.log(sum)
console.log(sum1)

console.log(addtofivesix)