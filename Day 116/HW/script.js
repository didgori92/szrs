// hw1

let odd = 0
let even = 0

for (let i = 1; i < 50; i++) {
  if (i % 2 === 0) {
    even += i
  } else {
    odd += i
  }
}

console.log(even * odd)


// hw2

let evens = 0

for (let a = 1; a < 100; a++) {
  if (a % 2 === 0) {
    evens += a
  }
}

console.log(evens)


// hw3

let numb = String(12345)
let numb2 = ""

for (let q = numb.length - 1; q >= 0; q--) {
    numb2 += numb[q]
}

console.log(numb2)

// hw4

function prime(nu) {

    if(nu < 2) {
        return false
    }

    for(let p = 2; p < nu; p++) {
        if(nu % p === 0) {
            return false
        }
    }

    return true
}

console.log(prime(8))


// hw5

function pali(str) {
    let rev = str.split("").reverse().join("")
    return str === rev
}

console.log(pali("racecar"))


// hw6

let avg = function(nums) {

    let count = 0
    let sum = 0
    
    for(let v = 0; v < nums.length; v++) {
        sum += nums[v]
    }

    return sum / nums.length

}

console.log(avg([1, 5, 7, 3, 6, 4, 5]))


// hw7

let word = function(text) {

    let cont = text.split(" ")
    return cont.length

}

console.log(word("hello, this is a big text or something"))


// hw8

let dubli = function(lis) {

    let empty = []

    for(let db of lis) {
        if(!empty.includes(db)) {
            empty.push(db)            
        }
    }

    return empty

}

console.log(dubli([1, 2, 3, 2, 6, 8, 8, 4]))


// hw9

let arrow = (nuh) => nuh >= 0 ? "positive" : "negative"

console.log(arrow(-5))


// hw10

let most = (limb) => {

    let thing = {}

    for(let numh of limb) {
        if(thing[numh]) {
            thing[numh] += 1
        } else {
            thing[numh] = 1
        }
    }

    let highest = 0
    let frequent = null

    for(let key in thing) {
        if(thing[key] > highest) {
            highest = thing[key]
            frequent = key
        }
    }

    return frequent

}

console.log(most([1, 2, 2, 6, 3]))


// hw11

let min = (l1) => {

    let small = l1[0]

    for(let g of l1) {
        if(g < small) {
            small = g
        }
    }

    return small

}

console.log(min([3, 6, 8, 4, 11, 2]))


// hw12

let words = ["hi", "hello", "something"]

let big = words.map((item) => item.toUpperCase())
console.log(big)


// hw13

let ml = [1, "Hello", 4, "WORLD", true, 9, "JS", null, 16, "Test", false, 7, "Code", 25, 3]
let tr = ml.map(el => {
    if(typeof el === "string") {
        return el.toLowerCase()
    } else if(typeof el === "number") {
        return Number.isInteger(Math.sqrt(el)) ? el : el ** 2
    } else {
        return el
    }
})

console.log(tr)


// hw14

let cl = [
    { br: "Mercedes", yr: 2017 },
    { br: "BMW", yr: 2022 },
    { br: "Toyota", yr: 2007 },
]

let bl = cl.map(c => c.br)

console.log(bl)


// hw15

let mxl = [453, "motor", false, "RAAAAAAAA", 19, { guh: "nah" }]
mxl.forEach(el => console.log(el + " — " + typeof el))


// hw16

let wors = ["Slice", "banana", "Wrong", "Calendar", "exotic", "lifeform", "Faith", "bee", "Australia", "lime"]
wors.forEach(s => {
    if(s[0] === s[0].toUpperCase()) {
        console.log(s)
    }
})


// hw18

let numlis = [21, 42, 62, 243, 5, 19, 33, 7, 37, 18, 11, 38, 53, 3, 25]
let cond = numlis.filter(n => n >= 18 && n <= 40)
console.log(cond)


// hw19

let wordlis = [1, "hello", true, "world", 35.22, 42, "js", "not true", false]
let filt = wordlis.filter(lem => typeof lem === "string")

console.log(filt)


// hw20

let yn = [15, -15, 45, 0, 94, -345, 12, -1, 19]
let negat = yn.filter(n => n < 0)
console.log(negat)


// hw21

let month = 7
switch(month) {
    case 1:
        console.log("january")
        break
    case 2:
        console.log("february")
        break
    case 3:
        console.log("march")
        break
    case 4:
        console.log("april")
        break
    case 5:
        console.log("may")
        break
    case 6:
        console.log("june")
        break
    case 7:
        console.log("july")
        break
    case 8:
        console.log("augustus")
        break
    case 9:
        console.log("september")
        break
    case 10:
        console.log("october")
        break
    case 11:
        console.log("november")
        break
    case 12:
        console.log("december")
        break
    default:
        console.log("WROOOOOOOONG")
}


// hw22

let ag = 20
switch(true) {
    case (ag >= 1 && ag < 18):
        console.log("child")
        break
    case (ag >= 18):
        console.log("adult")
        break
    default:
        console.log("are you dumb")
}


// hw23

let pw = "11211BOG"
switch(true) {
    case (pw.length < 8):
        console.log("yo password short")
        break
    case (pw.length <= 12):
        console.log("nice length")
        break
    default:
        console.log("not ideal size")
}


// hw24

let ternum = Number(prompt("Insert a number: "))

ternum > 200  ? console.log(ternum * 0.05) :
ternum >= 150 ? console.log(ternum * 0.50) :
ternum >= 100 ? console.log(ternum * 0.75) :
ternum > 0 ? console.log(ternum * 0.80) :
console.log("wrong number")


// hw25

let llist = [2, 1, 62, 1, 75,]
llist.length > 5 ? llist.pop() : llist.push("Levani")
console.log(llist)


// hw26

let dayn = 3

dayn === 1 ? console.log("ორშაბათი") :
dayn === 2 ? console.log("სამშაბათი") :
dayn === 3 ? console.log("ოთხშაბათი") :
dayn === 4 ? console.log("ხუთშაბათი") :
dayn === 5 ? console.log("პარასკევი") :
dayn === 6 ? console.log("შაბათი") :
dayn === 7 ? console.log("კვირა") :
console.log("არასწორი დღე")


// hw27

// while - პირველად ამოწმებს პირობას, შემდეგ ასრულებს კოდს.
//         თუ პირობა თავიდანვე false-ია, კოდი საერთოდ არ შესრულდება.
// do-while - პირველად ასრულებს კოდს, შემდეგ ამოწმებს პირობას.
//            კოდი მინიმუმ ერთხელ მაინც შესრულდება.


// hw28

let z = 14
while (z >= 2) {
    console.log(z)
    z -= 3
}

let jp = 30
do {
    console.log(jp)
    jp -= 3
} while (jp >= 2)


// hw29

let tex = prompt("Insert Text: ")
let vow = ["a", "e", "i", "o", "u"]
let have = false
let y = 0

do {
    if(vow.includes(tex[y].toLowerCase())) {
        have = true
    }
    y++
} while (y < tex.length && !have)

console.log(have ? "text has vowels" : "text doesnt have vowels")


// hw30

let forreal = ["apple", "banana", "cherry", "date", "elderberry"]

let w = 0
while (w < forreal.length) {
    console.log(forreal[w])
    w++
}

let d = 0
do {
    console.log(forreal[d])
    d++
} while (d < forreal.length)