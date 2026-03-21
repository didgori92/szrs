// hw1

function count(word) {
    let a = "aeiouy"

    let cn1 = 0
    let cn2 = 0


    for(let i of word) {
        if(a.includes(i)) {
            cn1 += 1
        } else {
            cn2 += 1
        }
    }
    
    return {
        vowels: cn1,
        others: cn2
    }


}

console.log(count("georgia"))

// hw2

function letters(wrd) {
    let up = "QWERTYUIOPASDFGHJKLZXCVBNM"

    let caseup = 0
    let casedown = 0

    for(let q of wrd) {
        if(up.includes(q)) {
            caseup += 1
        } else {
            casedown += 1
        }
    }

    return {
        uppercase: caseup,
        lowercase: casedown
    }
}

console.log(letters("FaSteR aCRosS"))

// hw3

function check(ch) {
    switch (true) {
        case (ch >= 'a' && ch <= 'z'):
        case (ch >= 'A' && ch <= 'Z'):
            return "letter"
        case (ch >= '0' && ch <= '9'):
            return "number"
        default:
            return "other"
    }
}

console.log(check("3"))
console.log(check("a"))
console.log(check("+"))

// hw4

function counting(text) {
    let count = 0

    for (let ch of text) {
        count += (ch >= '0' && ch <= '9' && ch % 2 === 0) ? 1 : 0
    }

    return count
}

console.log(counting("ASD1234FG"))