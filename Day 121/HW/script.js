// hw1

let btn1 = document.createElement("button")
btn1.className = "btn"
btn1.textContent = "Click"
document.body.append(btn1)

btn1.onclick = function() {
    if(btn1.classList.contains("active")) {
        btn1.classList.remove("active")
    } else {
        btn1.classList.add("active")
    }
}


// hw2

let div = document.getElementById("div")


let btn2 = document.createElement("button")
btn2.textContent = "text"

div.append(btn2)

btn2.onclick = function () {
    div.classList.remove("offline")
    div.classList.add("online")
}


// hw3

let div2 = document.createElement("div")

div2.textContent = "hello js"

div2.className = "box"

document.body.append(div2)


// hw4

let imag = document.createElement("img")

imag.setAttribute("src", "omlette.jpeg")
imag.setAttribute("alt", "not available")
imag.setAttribute("id", "image")

document.body.append(imag)


// hw5

let btn3 = document.createElement("button")

btn3.setAttribute("data-color", "red")

console.log(btn3.getAttribute("data-color"))


// hw6

let div3 = document.createElement("div")
div3.className = "card"
div3.textContent = "Thing"


let btn4 = document.createElement("button")
btn4.textContent = "PRess"

document.body.append(div3, btn4)

btn4.classList.add("active")


// hw7

let div4 = document.createElement("div")
let h = document.createElement("h1")
let p = document.createElement("p")
let btn5 = document.createElement("button")

h.textContent = "TITLE"
p.textContent = "This is a text"
btn5.textContent = "CLICK ME"

div4.setAttribute("class", "style")

div4.append(h, p)

document.body.append(div4, btn5)


// hw8

let div5 = document.createElement("div")
let img2 = document.createElement("img")
let h2 = document.createElement("h2")
let btn6 = document.createElement("button")

img2.setAttribute("src", "img.PNG")
img2.setAttribute("alt", "not available")

div5.className = "card"
div5.setAttribute("data-id", "1")

h2.textContent = "Card title"
btn6.textContent = "Action"

div5.append(img2, h2, btn6)

document.body.append(div5)