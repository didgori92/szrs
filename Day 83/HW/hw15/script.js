var date = Number(prompt("Enter a day of the week: ")).toLocaleLowerCase()
if (date === 1) {
    console.log("The day is Monday")
} else if (date === 2) {
    console.log("The day is Tuesday")
} else if (date === 3) {
    console.log("The day is Wednesday")
} else if (date === 4) {
    console.log("The day is Thursday")
} else if (date === 5) {
    console.log("The day is Friday")
} else if (date === 6) {
    console.log("The day is Saturday")
} else if (date === 7) {
    console.log("The day is Sunday")
} else {
    console.log("There are only 7 days in a week!")
}