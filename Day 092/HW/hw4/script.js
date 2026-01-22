let n = Number(prompt("Enter a number: "))
let list1 = []

for(let i = 0; i < n; i++) {
    let wrd = prompt("Enter a word: ")
    if(list1.includes(wrd)) {
        list1.splice(wrd, 1)
    }
    list1.push(wrd)    
}

console.log(list1)