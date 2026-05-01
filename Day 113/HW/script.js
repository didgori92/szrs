// hw1

let user = {
    _age: 18,

    set age(value) {
        if(value >= 0) {
            this._age = value
        } else {
            console.log("არასწორი ასაკი")
        }
    },

    get age() {
        return this._age
    }
}

user.age = 20

console.log(user.age)


// hw2

let weather = {
    _celsius: 0,

    set celsius(value) {
        this._celsius = value
    },

    get fahrenheit() {
        return (this._celsius * 9 / 5) + 32
    }
}

weather.celsius = 25

console.log(weather.fahrenheit)


// hw3

let profile1 = {
    _username: "",

    set username(value) {
        this._username = value.toLowerCase()
    },

    get username() {
        return "@" + this._username
    }
}

profile1.username = "Didgori"

console.log(profile1.username)


// hw4

let profile2 = {
    _username: "",

    set username(value) {
        let nums = 0

        for(let ch of value) {
            if(ch >= "0" && ch <= "9") {
                nums++
            }
        }

        if(!value.includes(" ") && nums >= 3) {
            this._username = value.toLowerCase()
        }
    },

    get username() {
        return "@" + this._username
    },

    get length() {
        return this._username.length
    }
}

profile2.username = "User123"

console.log(profile2.username)
console.log(profile2.length)


// hw5

let textAnalyzer = {
    _text: "",

    set text(value) {
        if(typeof value === "string") {
            this._text = value.trim()
        }
    },

    get length() {
        return this._text.length
    },

    get wordCount() {
        return this._text.split(" ").length
    },

    get isLong() {
        return this._text.length >= 20
    }
}

textAnalyzer.text = "   hello this is a long text   "

console.log(textAnalyzer.length)
console.log(textAnalyzer.wordCount)
console.log(textAnalyzer.isLong)


// hw6

function createCar(brand, year) {
    return {
        brand: brand,
        year: year
    }
}

let car1 = createCar("BMW", 2018)
let car2 = createCar("Mercedes", 2020)

console.log(car1)
console.log(car2)


// hw7

function createVehicle(model, brand, year, color, speed) {
    return {
        model: model,
        brand: brand,
        year: year,
        color: color,
        speed: speed
    }
}

let v1 = createVehicle("M5", "BMW", 2021, "black", 320)
let v2 = createVehicle("CLS", "Mercedes", 2019, "white", 280)

console.log(v1)
console.log(v2)


// hw8

function calc(a, b) {
    return {
        a: a,
        b: b,

        add() {
            return this.a + this.b
        },

        minus() {
            return this.a - this.b
        }
    }
}

let obj1 = calc(10, 5)
let obj2 = calc(20, 8)

console.log(obj1.add())
console.log(obj1.minus())

console.log(obj2.add())
console.log(obj2.minus())