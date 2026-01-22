age = Number(prompt("Enter your age: "))
energy = Number(prompt("Enter your energy level (1-10): "))

if (age < 20 && energy > 7 ) {
    console.log("Go run around you lazy egg")
} else if (energy < 4) {
    console.log("Take a nap, you might fall over")
} else {
    console.log("Youre fine to go about yo day")
}