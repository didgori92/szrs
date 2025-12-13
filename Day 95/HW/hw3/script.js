function cases(str) {
    let result = ""

    for(let i = 0; i < str.length; i++) {
        let ch = str[i]
        if(ch === ch.toLowerCase()) {
            result = result + ch.toUpperCase()
        } else {
            result = result + ch.toLowerCase()
        }
    }
    return result
}

console.log(cases("BaHhaAhhaHHH"))