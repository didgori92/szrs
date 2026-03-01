// cw1

let me = {
    name: "levani",
    surname: "gendzekhadze"
}

let num = Math.floor(Math.random() * 5) + 1

for(let key in me) {
    let result = ""

    for(let i = 0; i < num; i++) {
        result += me[key]
    }

    console.log(result)
}