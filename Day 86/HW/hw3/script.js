word1 = prompt("Enter a word: ").toLowerCase()
word2 = prompt("Enter another word: ").toLowerCase()

if (word1 === word2) {
    console.log("The words match!")
} else if (word1 !== word2 ) {
    if (word1[0] === word2[0]) {
        console.log("Only the first letters are the same")
    }
} else {
    console.log("Nothing matches, you quagmire")
}