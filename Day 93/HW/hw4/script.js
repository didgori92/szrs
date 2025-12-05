let students = ["Ana", "Mate", "Giorgi", "Saba", "Levan", "Tamar"]

let EIN = []
let OID = []

for(let i = 0; i < students.length; i++) {
    if (i % 2 === 0) {
        EIN.push(students[i])
    } else {
        OID.push(students[i])
    }
}

console.log(EIN)
console.log(OID)