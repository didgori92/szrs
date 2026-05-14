// hw1

let robot = {
    model: "R2D2",
    saymod() {
        return "My name is " + this.model
    }
}

console.log(robot.saymod())


// hw2

let obj = {
    rgFn: function() {
        return this
    },
    arFn: () => {
        return this
    }
}

console.log(obj.rgFn())
console.log(obj.arFn())


// hw3

let bankacc = {
    _balance: 100,
    get balance() {
        return "$" + this._balance
    },
    set balance(val) {
        if(val > 0) {
            this._balance = val
        }
    }
}

console.log(bankacc.balance)
bankacc.balance = 200
console.log(bankacc.balance)
bankacc.balance = -50
console.log(bankacc.balance)


// hw4

let user = {
    _username: "",
    get username() {
        return this._username
    },
    set username(val) {
        if(val.length >= 5) {
            this._username = val
        } else {
            console.log("Error: name needs to be at minimum 5 symbols")
        }
    }
}

user.username = "Jo"
user.username = "Johnny"
console.log(user.username)


// hw5

function createvehc(make, model, year) {
    return { make, model, year }
}

console.log(createvehc("Yamaha", "MT-07", 2023))


// hw6

function createprod(id, name, price) {
    return { id, name, price }
}

console.log(createprod(1, "laptop", 999))


// hw7

let motorcycle = {
  model: "Yamaha YZF-R7",
  year: 2024,
  specs: {
    chassis: {
      frame: "Diamond frame",
      suspension: {
        front: "Inverted fork",
        rear: "Link-type Monocross"
      },
      brakes: {
        front: "Dual 298mm discs",
        rear: "Single 245mm disc"
      }
    },
    engine: {
      type: "CP2 (Crossplane)",
      displacement: "689cc",
      horsepower: 73.4,
      cooling: "Liquid-cooled"
    }
  }
}

let { 
    model, 
    year, 
    specs: { 
        engine: { type, displacement, horsepower, cooling },
        chassis: { 
            frame,
            suspension: { front: frontSusp, rear: rearSusp },
            brakes: { front: frontBrake, rear: rearBrake }
        }
    }
} = motorcycle

console.log(model, year, type, displacement, horsepower, cooling)
console.log(frame, frontSusp, rearSusp, frontBrake, rearBrake)


// hw8

function displayCar({ brand, model, year }) {
    console.log(brand + " " + model + " - " + year)
}

displayCar({ brand: "Toyota", model: "Supra", year: 2023 })


// hw9

let profile = { id: 1, firstName: "John", lastName: "Doe", birthday: "01.01.1990" }
let account = { id: 1, email: "john@mail.com", password: "1234" }

let merged = Object.assign(profile, account)

console.log(merged)