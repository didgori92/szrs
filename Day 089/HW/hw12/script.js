let word = "ჰიდროელექტროსადგური"


let elektro = ""
for (let i = 5; i <= 11; i++) {
    elektro += word[i]
}


let sadguri = ""
for (let a = 12; a <= 18; a++) {
    sadguri += word[a]
}

console.log(sadguri)
console.log(elektro)
