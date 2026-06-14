// cw1

function thing(name, surname, email, id, age) {

    let _balance = 100

    return {
        name,
        surname,
        email,
        id,
        age,


        get balance() {
            return _balance + "$"
        },

        set balance(val) {

            if(typeof val === "number" && val > 0) {
                _balance = val
            }

        }
    }

}

let user = thing("John", "Man", "JohnMan@email.com", 41, 29)

user.balance = 120

console.log(user.balance)