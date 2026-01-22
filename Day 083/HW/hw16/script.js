var temp = Number(prompt("Enter the current temperature in Celsius: "))
if (temp < 0) {
    console.log("Its freezing outside! dress warmly.")
} else if (temp >= 0 && temp <= 25) {
    console.log("The weather is moderate. enjoy your day!")
} else {
    console.log("Its hot outside! stay hydrated")
}