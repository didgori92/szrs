function calculator(num1, num2, operator) {
    if(operator === "+") {
        return num1 + num2
    } else if(operator === "-") {
        return num1 - num2
    } else if(operator === "*") {
        return num1 * num2
    } else if(operator === "/") {
        return num1 / num2
    }
}

console.log(calculator(53, 125, "-"))
console.log(calculator(455, 5, "/"))
console.log(calculator(63, 12, "+"))