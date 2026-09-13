// cw1

let input = document.getElementById("in")
let p = document.getElementById("p")

input.addEventListener("input", ()=> {
    p.textContent = input.value
})


// cw2

let p2 = document.getElementById("p2")

p2.addEventListener("click", ()=> {
    p2.style.backgroundColor = "red"
    p2.style.color = "green"
    p2.style.fontSize = "20px"
})