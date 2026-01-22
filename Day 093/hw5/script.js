let items = [2, "hello", 3, "world", 4]
let product = 1

for(let i = 0; i < items.length; i++) {
    if (items[i] * 1) {
        product = product * items[i]
    }
}

console.log(product)