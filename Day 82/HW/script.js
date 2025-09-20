num = 12
number = 5
var Total = num + number

console.log(Total)

var Name = "levani"
alert("Hello " + Name)

/* var, const and let are used to declare variables in Javascript.
var is function-scoped and can be redeclared and updated.
let is block-scoped and can be updated but not redeclared.
const is block-scoped and cannot be updated or redeclared. */
console.log("var, const and let are used to declare variables in Javascript.var is function-scoped and can be redeclared and updated. let is block-scoped and can be updated but not redeclared. const is block-scoped and cannot be updated or redeclared.")

var a = 11
a = 15
console.log(a)
let b = 7
b = 14
console.log(b)
const c = 9
console.log(c)
// c = 20 // this will give an error because const cannot be reassigned

var d = 3
d = 13
console.log(d)