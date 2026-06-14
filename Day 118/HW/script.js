// hw1

/* 

spread & rest

the spread operator takes the contents of one list, and copies it into another. for example

let list1 = [1, 2, 3]
let list2 = [4, 5, 6]

let list3 = [...list1, ...list2]

list3 would return the contents of both 1 and 2 combined into one without modifying the existing lists


the rest operator allows you to name variables while then putting everything else into one big group. for example

let stuff = [15, 6, 23, 7, 99, 34]

let st = [a, b, c, ...therest] = stuff

a will store 15, b 6 and c 23, while everything else gets bunched up in ...therest

*/



// hw2

let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

let [one, two, three, ...remaining] = nums

console.log(one)
console.log(two)
console.log(three)
console.log(remaining)


// hw3

let stuff = ["banana", "apple"]
let stuff2 = ["pc", "miniature"]

let combine = [...stuff, ...stuff2]

console.log(combine)


// hw4

let og = [7, 165, 33]

let extra = [1, 2, ...og, 9, 14]

console.log(extra)


// hw5

let obj = {
    city: "tbilisi",
    status: "capital",
    size: "1m"
}

let { city: capital, status: iscapital, size: population} = obj

console.log(capital)
console.log(iscapital)
console.log(population)


// hw6

let numbers = [1, 64, 6, 234, 74, 823, 86, 129, 5, 23, 73]

let max = Math.max(...numbers)

console.log(max)