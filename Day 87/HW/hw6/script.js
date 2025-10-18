let userinput = Number(prompt("Enter a number: "))
for(let i = 0; i <= userinput; i++) {
    if(i % 2 === 0) {
        console.log(i + " is even")
    } else if(i % 2 !== 0) {
        console.log(i + "is odd")
    } else; {
        console.log("please enter a number")
    }
}