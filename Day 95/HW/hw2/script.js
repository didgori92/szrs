function replaceVowels(str) {
    let result = ""

    for(let i = 0; i < str.length; i++) {
        let ch = str[i].toLowerCase()
        if (ch === "a" || ch === "e" || ch === "i" || ch === "o" || ch === "u") {
            result = result + "*"
        } else {
            result = result + str[i]
        }
    }

    return result
}

console.log(replaceVowels("hello"))
console.log(replaceVowels("Javascript"))