// cw1

let par = document.querySelector(".p1")

console.log(par)


// cw2

let hei = document.querySelectorAll(".H")

console.log(hei)


// cw3

let q = document.getElementById("#box")

let but = box.querySelector("button")
let p = box.querySelector("p")

but.textContent = "Click"
p.textContent = "paragraph"

box.innerHTML += "<h2>description</h2>"

console.log(box)


// cw4

let animal = document.getElementsByClassName("yo")[0].innerText
let img = document.getElementById("pic")

if(animal === "dog") {
    img.setAttribute("src", "dawg.avif")
    img.setAttribute("alt", "alternative")
} else if(animal === "cat") {
    img.setAttribute("src", "gato.webp")
    img.setAttribute("alt", "something")
} else {
    img.setAttribute("src", "donke.jpg")
    img.setAttribute("alt", "shrek")
}