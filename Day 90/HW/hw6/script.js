let input = prompt("Enter a word: ")
let reversed = ""

for (let ind = 0; ind < input.length; ind++) {
    reversed = input[ind] + reversed;
    if (reversed === input) {
        console.log("The word is a palindrome")
    } else {
        console.log("Nah")
    }
}
