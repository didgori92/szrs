//hw1


let products = [
    { name: "Apple",  price: 1.2 },
    { name: "Bread",  price: 2.5 },
    { name: "Milk",   price: 1.8 },
    { name: "Cheese", price: 4.3 },
    { name: "Eggs",   price: 3.0 },
]

const totprice = products.reduce((sum, p) => sum + p.price, 0)
console.log(totprice)


// hw 2


let names = ["Ana", "Giorgi", "Ana", "Nino", "Giorgi", "Ana"];

let freq = names.reduce((acc, name) => {
    acc[name] = (acc[name] || 0) + 1
    return acc
}, {})
console.log(freq)


// hw3


let nums = [1, 2, 3, 4, 5]

let result = nums.reduce((acc, n) => {
    return n % 2 === 0 ? acc * n : acc + n
}, 1)
console.log(result)


// hw4


let account = {
    _balance: 100,
    get balance() {
        return this._balance * 0.8
    },

    set balance(val) {
        if(!Number.isInteger(val) || val <= 50) {
        console.log("Must be a whole number greater than 50")
        return
        }
        this._balance = val
    }
}


// hw5


let vehicle = {

    _speed: 10,
    get speeds() {
        return this._speed > 100 ? "Super Speed: " + this._speed : this._speed
    },

    set speed(vl) {
        if(vl <= this._speed) {
            console.log("New speed must exceed current speed")
            return
        }
        this._speed = vl
    }
}



// hw6


let users = [
  { id: 1, name: "Shalva",    age: 22 },
  { id: 2, name: "Mari", age: 25 },
  { id: 3, name: "Sopo",   age: 19 },
  { id: 4, name: "Luka",   age: 30 },
]

let user3 = users.find(u => u.id === 3)
console.log(user3)


// hw7


let mixed = [1, 3, 4.5, 7, 2.2, 8]

let firstdec = mixed.find(n => !Number.isInteger(n))
console.log(firstdec)

// hw8


let lis = [1, 5, "hi", 3, "hello", "bye"]

let strid = lis.findIndex(j => typeof j === "string")
if(strid !== -1) {
    lis.splice(strid, 1)
}

console.log(lis)


// hw9


let word = ["cat", "elephant", "sky", "mountain", "hi"];

let longword = word.findIndex(w => w.length > 7)

console.log(longword)



// hw10


function createBook(title, author, price) {
    return {
        title,
        author,
        price,
        getInfo() {
        console.log("წიგნი: " + title + ", ავტორი: " + author + ", ფასი: " + price + " ლარი")
        },
    }
}

let book = createBook("1984", "George Orwell", 120)
book.getInfo()

// hw11


function createRobot(name) {

    let _battery = 100

    return {

        get battery() {
            return "battery: " + _battery +"%"
        },
        
        work() {

            if(_battery < 15) {
                console.log("დაიტენე!")
                return
            }

            _battery -= 15

            console.log(name + " is working at " + _battery + "%")

        }

    }

}

let robot = createRobot("R2D2")

robot.work()
console.log(robot.battery)


// hw12


function registerUser(username, email, password) {
    return { username, email, password }
}

console.log(registerUser("Giorgi", "gio@mail.com", "634234"))


// hw13


function createProduct(title, price) {

    let discountPrice = price / 2

    return { title, price, discountPrice }
}


console.log(createProduct("Laptop", 1000))


// hw14


let colors = ["წითელი", "მწვანე", "ლურჯი", "ყვითელი"]

let [first, second] = colors

console.log(first, second)


// hw15


let user = {
     id: 10, username: "Ana" 
}

let { id: userId, username: name } = user

console.log(userId, name)