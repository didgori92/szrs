// logical operators ( &&, ||, )

var userage = Number(prompt("Enter your age: "))
var username = prompt("Enter your name: ").toLowerCase()
var myname = "levani"

if (username === myname && userage >= 18) {
    alert("We have the same name, and you are an adult!")
} else if (username !== myname && userage >= 18) {
    alert("You are an adult, but we have different names.")
} else {
    alert("Who the hell are you?")
}

var animal = prompt("Enter an animal: ").toLowerCase()
var myanimal = "duck"

if (animal === myanimal || animal === "lomi") {
    alert("You entered either my favourite animal, or the king of animals.")
} else {
    alert("You entered something lame. get real.")
}