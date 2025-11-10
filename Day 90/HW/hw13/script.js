let idx = Number(prompt("Enter an index: "))
let text = prompt("Enter text: ")

let output = ""
for (let i = 0; i <= idx && i < text.length; i += 2) {
    output += text[i]
}

console.log(output)