// cw1

let body = document.body

let div1 = document.createElement("div")

body.append(div1)

div1.style.border = "5px solid darkred"
div1.style.width = "400px"
div1.style.height = "400px"

let red = document.createElement("div")
let blue = document.createElement("div")

div1.append(red, blue)

red.style.backgroundColor = "red"
red.style.width = "50%"
red.style.height = "100%"

blue.style.backgroundColor = "blue"
blue.style.width = "50%"
blue.style.height = "100%"

div1.style.display = "flex"

let p1 = document.createElement("p")
let p2 = document.createElement("p")

p1.textContent = "red"
p1.style.color = "darkred"

p2.textContent = "blue"
p2.style.color = "darkblue"

red.append(p1)
blue.append(p2)


// cw2

let usinp = prompt("insert a colour: ")

let p3 = document.createElement("p")
p3.textContent = "this is a text"

p3.style.color = usinp

document.body.append(p3)


// cw3

let h = document.querySelector("h1")

let pardiv = h.parentElement
pardiv.style.border = "5px solid yellow"

let children = pardiv.children

children[0].style.color = "red"
children[0].style.fontSize = "40px"

children[1].style.color = "orange"
children[1].style.fontSize = "20px"

children[2].style.color = "pink"
children[2].style.fontSize = "15px"

let firstch = pardiv.firstElementChild
firstch.style.backgroundColor = "orange"

let secondch = firstch.nextElementSibling
secondch.style.backgroundColor = "purple"

let lastch = pardiv.lastElementChild
lastch.style.backgroundColor = "lightgreen"