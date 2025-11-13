let list1 = [1, 2, 3, 4, 5]
let userinput = Number(prompt("Enter a number: "))

let ind = -1
for (let i = 0; i < list1.length; i++) {
    if (list1[i] === userinput) {
        ind = i
        break
    }
}

if (ind === -1) {
    list1.push(userinput)
} else {
    list1.splice(ind, 1)
}

console.log(list1)