// hw1

/* for of and for in are two types of the for loop
during the for of, the loop will return the values of of the iterable/list on the index. for example:

let list = ["dog", "cat", "apple"]

for(let x of list) {
    console.log(x)
}

in the console, it will return dog, cat and apple seperately.

during the for in loop, the loop will return the index if it is a list, or a key if it is an object. for example:

let thing = {
    name: "carlito",
    cat: "jose",
    dog: "bruno"
}

for(let x in thing) {
    console.log(x)
}

in the console, it will return name, cat and dog

*/

// hw2

let name = prompt("Insert your name: ")

for(let a of name) {
    console.log(a)
}

// hw3

let list = ["gweb", "glorbo", true, 234, 77, "florbo", 6631, false]

let strings = []

for(let i of list) {
    if(typeof i === "string") {
        strings.push(i)
    }
}

console.log(strings)

// hw4

let movie = {
    name: "fury",
    author: "David Ayer",
    rating: "8.7/10",
    date: "2014"
}

for(let x in movie) {
    console.log(movie[x])
}

for(let z in movie) {
    console.log(z)
}

// hw5

let data = {
    name: "Alex",
    age: 20,
    city: "Tbilisi"
}

let key = prompt("Enter a key:")

if(key in data) {
    console.log("Value:", data[key])
} else {
    let value = prompt("Key not found. Enter a value: ")
    data[key] = value
    console.log("Added new key-value pair: ", data)
}

// hw6

let list1 = ["apple", "banana", "apple", "orange", "banana", "kiwi"]

let counts = {

}

for (let item of list1) {
    if(item in counts) {
        counts[item] += 1
    } else {
        counts[item] = 1
    }
}

console.log(counts)