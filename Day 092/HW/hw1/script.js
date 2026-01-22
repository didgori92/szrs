let list1 = ["ana", "gio", "zagro", "luka"]
let wrd = prompt("Enter a word: ")

if(list1.includes(wrd)) {
    let u = ""
    for(let i = wrd.length - 1; i >= 0; i--) {
        u += wrd[i]
    }
    list1.push(u)
    console.log(list1)
} else {
    list1.unshift(wrd)
    console.log(list1)
}