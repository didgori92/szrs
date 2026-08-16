// cw1

let box = document.querySelector(".box")

box.onmouseover = function() {
    box.textContent = "the secret is revealed 🎉"
    box.style.backgroundColor = "green"
    box.style.color = "white"
    box.style.transform = "scale(1.1)"
}


//cw2

let prd = document.querySelector(".product")
let price = document.querySelector(".price")
let buybut = document.querySelector(".buy")

prd.onmouseover = function() {

    price.style.display = "block"
    buybut.style.display = "block"
    prd.style.boxShadow = "0 4px 12px grey"

}

prd.onmouseout = function() {

    price.style.display = "none"
    buybut.style.display = "none"
    prd.style.boxShadow = "none"

}


// cw3

let boxx = document.querySelector(".presb")
let size = 150

boxx.onmousedown = function() {
    boxx.style.backgroundColor = "red"
    boxx.textContent = "Pressed"
}

boxx.onmouseup = function() {
    boxx.style.backgroundColor = "green"
    boxx.textContent = "Released"
}

boxx.onwheel = function() {
    size += 10
    boxx.style.width = size + "px"
    boxx.style.height = size + "px"
}