let binaryList = ['01001011100', '100111110', '110101010']
let decimalList = []

for(let i = 0; i < binaryList.length; i++) {
    let binary = binaryList[i]
    let decimal = 0
    let power = 1

    for (let j = binary.length - 1; j >= 0; j--) {
        if (binary[j] === '1') {
            decimal = decimal + power
        }
        power = power * 2
    }

    decimalList.push(decimal)
}

console.log(decimalList)