let userpass = prompt("Enter your password: ").toLowerCase()
if (userpass === "12345" || userpass === "goa") {
    console.log("Welcome back!")
} else {
    console.log("Who are you, huh??")
}