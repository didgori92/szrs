// hw1

let user = {
    username: "levani",
    _password: "1234",

    get pass() {
        let temp = ""
        for(let i of this._password) {
            temp += "*"
        }

        return temp
    },

    changePassword: function(oldPass, newPass) {
        if(oldPass !== this._password) {
            return "passwords do not match"
        }

        if(newPass.length >= 6) {
            user._password = newPass
            return user._password
        } else {
            return "password was too short"
        }
    }
}

console.log(user.changePassword("1234", "1234567"))

console.log(user.pass)

// hw2

let bankAccount = {
    _balance: 100,

    deposit(amount) {
        if(amount > 0) {
            this._balance += amount
        }
    },

    withdraw(amount) {
        if(amount > 0 && amount <= this._balance) {
            this._balance -= amount
        }
    },

    get balance() {
        return this._balance
    }
}

console.log(bankAccount.balance)


// hw3

let shop = {
    _items: [
        { name: "apple", price: 5, qty: 2 },
        { name: "banana", price: 3, qty: 4 },
        { name: "orange", price: 6, qty: 1 }
    ],

    addItem(product) {
        this._items.push(product)
    },

    removeItem(index) {
        this._items.splice(index, 1)
    },

    clear() {
        this._items = []
    },

    get totalPrice() {
        return this._items.reduce((acc, el) => {
            return acc + el.price * el.qty
        }, 0)
    }
}

console.log(shop.totalPrice)


// hw4

let user = {
    _email: "test@gmail.com",

    set email(newEmail) {
        if(newEmail.includes("@") && newEmail.includes(".")) {
            this._email = newEmail
        }
    },

    get email() {
        return this._email
    }
}

user.email = "newmail@gmail.com"

console.log(user.email)