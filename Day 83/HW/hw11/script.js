var num = Number(prompt("Enter a month number (1-12" ))
if (num === 12 || num === 1 || num === 2) {
    if (num === 12) {
        console.log("The season is winter, and the month is december")
    }
    if (num === 1) {
        console.log("The season is winter, and the month is january")
    }
    if (num === 2) {
        console.log("The season is winter, and the month is february")
    }
} else if (num === 3 || num === 4 || num === 5) {
    if (num === 3) {
        console.log("The season is spring, and the month is march")
    }
    if (num === 4) {
        console.log("The season is spring, and the month is april")
    }
    if (num === 5) {
        console.log("The season is spring, and the month is may")
    }
} else if (num === 6 || num === 7 || num === 8) {
    if (num === 6) {
        console.log("The season is summer, and the month is june")
    }
    if (num === 7) {
        console.log("The season is summer, and the month is july")
    }
    if (num === 8) {
        console.log("The season is summer, and the month is august")
    }
} else if (num === 9 || num === 10 || num === 11) {
    if (num === 9) {
        console.log("The season is autumn, and the month is september")
    }
    if (num === 10) {
        console.log("The season is autumn, and the month is october")
    }
    if (num === 11) {
        console.log("The season is autumn, and the month is november")
    }
} else {
    console.log("There are only 12 months in a year!")
}