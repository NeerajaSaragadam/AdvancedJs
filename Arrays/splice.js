var months = ["jan","march","april","june"]
var change = months.splice(1,0,"feb")
console.log(months)

const months1 = ['Jan', 'March', 'April', 'June'];
months1.splice(1, 0, 'Feb');
// inserts at index 1
console.log(months1);
// expected output: Array ["Jan", "Feb", "March", "April", "June"]

months1.splice(4, 1, 'May');
// replaces 1 element at index 4
console.log(months1);
// expected output: Array ["Jan", "Feb", "March", "April", "May"]
