var num = Number(prompt("Enter a number: "))
if (num > 20) {
    if (num % 2 === 0) {
        console.log(num * 2)
    } else {
        console.log(num * 3)
    } 
    } else if (num <= 20) {
        if (num % 3 === 0) {
            console.log(num % 3)
        } else {
            console.log(num)
        }
    }