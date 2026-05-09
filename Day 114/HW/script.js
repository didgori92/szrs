// hw1


function createCar(brand, model, year) {
    return {
        brand,
        model,
        year
    }
}

let car1 = createCar("BMW", "M5", 2021)

console.log(car1)

// hw2


function createUser(name, age, email) {
    return {
        name,
        age,
        email
    }
}

let user1 = createUser("gio", 18, "gio@gmail.com")
let user2 = createUser("nika", 20, "nika@gmail.com")
let user3 = createUser("luka", 17, "luka@gmail.com")
let user4 = createUser("ana", 19, "ana@gmail.com")
let user5 = createUser("mari", 21, "mari@gmail.com")

let users = [user1, user2, user3, user4, user5]

users.forEach(u => {
    let { name, email } = u

    console.log(name, email)
})

// hw3


function updateProduct(id, updates) {
    let { title } = updates

    return {
        id,
        title
    }
}

let book = updateProduct(1, {
    title: "1984",
    price: 20,
    author: "George Orwell",
    year: 1949
})

console.log(book)


// hw4

const motorcycle = {
    brand: "Kawasaki",
    model: "Ninja H2R",

    specs: {
        engine: "998cc",
        horsepower: 310,
        topSpeed: "400 km/h"
    },

    colors: ["Lime Green", "Mirror Coated Spark Black"],

    isStreetLegal: false
}

let {
    brand,
    model,

    specs: {
        engine,
        horsepower,
        topSpeed
    },

    colors: [color1, color2],

    isStreetLegal
} = motorcycle

console.log(brand)
console.log(model)

console.log(engine)
console.log(horsepower)
console.log(topSpeed)

console.log(color1)
console.log(color2)

console.log(isStreetLegal)