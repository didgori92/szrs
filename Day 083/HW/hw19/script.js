var password = "makaka1987"
var mysurname = "gendzekhadze"
var userpass = prompt("Enter a password: ")
if (userpass === password) {
    var usersurname = prompt("Enter your surname: ").toLocaleLowerCase()
    var username = prompt("Enter your name: ").toLocaleLowerCase()
    var userage = Number(prompt("Enter your age: "))
    if (usersurname === mysurname) {
        console.log("You have logged in successfully")
    } else {
        console.log("Something is incorrect")
    }
} else if (userpass !== password) {
    console.log("incorrect password")
}