// cw1

let num = Number(prompt("enter a number: "))

switch(true){
    case num >= 18:
        console.log("adult")
        break
    case num >= 13 && num <= 17:
        console.log("teen")
        break
    default:
        console.log("child")
}