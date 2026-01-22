function sum(list) {
    let total = 0
    for(let i = 0; i <list.length; i++) {
        total = total + list[i]
    }
    return total
}

console.log(sum([1, 4, 2, 5]))
console.log(sum([5, 73, 1]))
console.log(sum([6, 13, 75, 35, 6]))