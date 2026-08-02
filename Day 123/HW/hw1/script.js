let num = document.querySelector(".number")

let plus = document.querySelector(".plus")
let minus = document.querySelector(".minus")
let reset = document.querySelector(".reset")


let count = 0

plus.onclick = function() {
    count += 1
    display()
}

minus.onclick = function() {
    count -= 1
    display()
}

reset.onclick = function() {
    count = 0
    display()
}

function display() {
    num.textContent = count

    if(count > 0) {
        num.style.color = "green"
    } else if(count < 0) {
        num.style.color = "red"
    } else {
        num.style.color = "black"
    }
}