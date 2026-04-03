// cw1


let list1 = [1, "hello", true, "world", 5, null, "js"]

let strings = list1.filter(el => typeof el === "string")

console.log(strings)


// cw2


let nums = [10, 50, 120, 30, 200]

let res = nums.find(n => n > 100)

console.log(res)


// cw3


let names = ["ana", "gio", "mariam", "luka", "aleqsandre"]

let ind = names.findIndex(n => n.length > 5)

console.log(ind)