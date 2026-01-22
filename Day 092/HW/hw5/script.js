let list1 = [10,20,30,40,50,60,70,80,90,100,110,120,130,140,150]

let num1 = Number(prompt("Enter a number: "))
let num2 = Number(prompt("Enter a number: "))

if(num1 < num2) {
    console.log(list1.slice(num1, num2))
} else {
    console.log(list1.slice(num2, num1))
}
