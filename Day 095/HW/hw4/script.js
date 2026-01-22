function filterAdults(list) {
    let result = []

    for (let i = 0; i < list.length; i++) {
        let inner = list[i]

        if (inner[1] > 18) {
            result.push(inner)
        }
    }
    return result
}

let people = [
    ["Ana", 17],
    ["Beka", 20],
    ["Giorgi", 18],
    ["Nino", 22]
]

console.log(filterAdults(people))