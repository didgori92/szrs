let list = [12, 523, 42, 123, 66, 52, 63, 72, 14, 73, 62]
let i = 0

while (i <list.length) {
    if (list[i] % 2 === 0) {
        console.log(list[i])
    } else {
        console.log("odd number")
    }
    i++
}

for(let a = 0; a < list.length; a++) {
    if(list[a] % 2 === 0) {
        console.log(list[a])
    } else {
        console.log("odd number")
    }
}