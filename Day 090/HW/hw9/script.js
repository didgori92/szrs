let text = prompt("Enter a long text: ").toLowerCase()

let output = ""
for (let i = 0; i < text.length; i++) {
    if (text[i] === "a") {
        output += "@"
    } else {
        output += text[i]
    }
}

console.log(output)