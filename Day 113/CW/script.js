// cw1

let phone = {
    _number: "",

    set tel(value) {
        let valid = true

        for(let ch of value) {
            if(ch < "0" || ch > "9") {
                valid = false
            }
        }

        if(value.length > 6 && valid) {
            this._number = value
        } else {
            alert("invalid number")
        }
    },

    get tel() {
        if(this._number.length > 6) {
            return this._number
        } else {
            return "CANT RETURN NUMBER"
        }
    }
}

phone.tel = "12345678"

console.log(phone.tel)


// cw2

function createPerson(name, surname, age, eyeColor, adress) {
    return {
        name: name,
        surname: surname,
        age: age,
        eyeColor: eyeColor,
        adress: adress
    }
}

let p1 = createPerson("gio", "beridze", 18, "brown", "tbilisi")
let p2 = createPerson("nika", "mamulashvili", 20, "blue", "kutaisi")
let p3 = createPerson("luka", "gelashvili", 17, "green", "batumi")
let p4 = createPerson("ana", "kapanadze", 19, "brown", "gori")
let p5 = createPerson("mari", "davitashvili", 21, "black", "rustavi")

console.log(p1)
console.log(p2)
console.log(p3)
console.log(p4)
console.log(p5)