let lists = [
    [1, 0, 0, 1, 0],
    [0, 1, 0, 0, 0], 
    [0, 1, 0, 0, 1]
]

let decimals = []

for (let i = 0; i < lists.length; i++) {

    let binary = ""
    for (let j = 0; j < lists[i].length; j++) {
        binary += lists[i][j]
    }

    let decimal = 0
    let value = 1


    for (let k = binary.length - 1; k >= 0; k--) {
        let digit = Number(binary[k])

        decimal += digit * value
        
        value = value * 2
    }

    decimals.push(decimal)
}

for (let i = 0; i < decimals.length; i++) {
    for (let j = 0; j < decimals.length - 1; j++) {
        if (decimals[j] < decimals[j + 1]) {
            [decimals[j], decimals[j + 1]] = [decimals[j + 1], decimals[j]]
        }
    }
}

console.log(decimals)