// cw1

let par = document.getElementById("parent")

let h = document.createElement("h1")

let p = document.createElement("p")

par.appendChild(h)
par.appendChild(p)

h.textContent = "Title"
p.textContent = "paragraph"

h.setAttribute("Class", "child1")
p.setAttribute("Class", "child2")


// cw2

let p1 = document.getElementById("p1")
let p2 = document.getElementById("p2")


let val = false

if(val) {
    p2.remove()
} else {
    p1.remove()
}