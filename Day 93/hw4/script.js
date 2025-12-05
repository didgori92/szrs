let students = ["Ana", "Mate", "Giorgi", "Saba", "Levan", "Tamar"]

let EID = []
let OID = []

for(let i = 0; i < students.length; i++) {
    if (i % 2 === 0) {
        EID.push(students[i])
    } else {
        OID.push(students[i])
    }
}

console.log(EID)
console.log(OID)