// cw1

let car = {
    brand: "Mercedes",
    model: "S",
    year: 1972,
    color: "Dark Blue"
}

let lst = Object.entries(car)

console.log(lst)


// cw2

let me = {
    name: "levani",
    surname: "gendzekhadze",
    age: 19
}

let stuff = {
    address: "khoni",
    hobby: "sleep",
    favcol: "dark red"
}

let person = Object.assign(me, stuff)
console.log(person)

let {
    name,
    surname,
    age,
    address,
    hobby,
    favcol
} = person

console.log(name)
console.log(surname)
console.log(age)
console.log(address)
console.log(hobby)
console.log(favcol)

// cw3

let ob = {
    name: "leo"
}

let stu = {
    author: "george orwell",
    year: 1949,
    amount: 30
}

let combined = Object.assign(ob, stu)

console.log(combined.hasOwnProperty("name"))
console.log(combined.hasOwnProperty("color"))

// cw4

let m1 = {
    nam: "Levani",
    lastname: "Gendzekhadze",
    status: "student"
}

let m2 = m1.valueOf()

console.log(m2)