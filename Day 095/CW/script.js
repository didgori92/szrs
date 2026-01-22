// cw1

function OrE(number) {
    if(number % 2 === 0) {
        return "even"
    }
    else if(number % 2 !== 0) {
        return "odd"
    }
}

console.log(OrE(5))
console.log(OrE(2))
console.log(OrE(643))
console.log(OrE(45))
console.log(OrE(16))

// cw2

function sqr() {
    let num = prompt("Enter a number: ")
    return num * num
}

console.log(sqr())





//ამოცანა — რიცხვების მასივში მინიმუმის პოვნა

//შექმენი ფუნქცია findMin(numbers)

//პარამეტრი: რიცხვების სია

//ფუნქციამ უნდა იპოვოს და დააბრუნოს მასივში ყველაზე პატარა რიცხვი.

function findMin(numbers) {
    let min = numbers[0]
    for(let i = 0; i < numbers.length; i++) {
        if(numbers[i] < min) {
            min = numbers[i]
        }
    }
    return min
}

console.log(findMin([24, 54, 13, 64, 12]))