let names = ["nika", "ana", "levani", "mate", "tina", "aleqsandre", "antoni", "andro", "anano", "avto"]


for (let i = 0; i < names.length; i++) {
    let n = names[i].toLowerCase()
    if (n[0] === "a" && n[n.length - 1] === "o") {
        console.log(names[i])
    }
}


let a = 0
while (a < names.length) {
    let n = names[a].toLowerCase()
    if (n[0] === "a" && n[n.length - 1] === "o") {
        console.log(names[a])
    }
    a++
}