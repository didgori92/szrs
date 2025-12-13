function pald(str) {
    let s = str.toLowerCase()

    for(let i = 0; i < s.length; i++) {
        if (s[i] !== s[s.length - 1 - i]) {
            return false
        }
    }

    return true
}

console.log(pald("racecar"))
console.log(pald("hello"))
console.log(pald("ana"))