// cw1

console.log(Math.random() * 15 + 5)

// cw2

let car = {
    name: "mercedes",
    brand: "E-class",
    year: 1953,
    colour: "blue",
    information: function() {
        console.log(this.name + this.brand + this.year + this.colour)
    }
}

car.information()

// cw3

let student = {
    name: "Levani",
    age: 19,
    scores: [85, 90, 78, 95, 88],
    average: function() {
        let sum = 0
        for(let score of this.scores) {
            sum += score
        }
        return sum / this.scores.length
    },
    minimum: function() {
        let min = this.scores[0]
        for(let score of this.scores) {
            if (score < min) {
                min = score
            }
        }
        return min
    }
}

console.log(student.average())
console.log(student.minimum())