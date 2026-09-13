// cw1

// let form = document.getElementById("form")
// let inputs = form.querySelectorAll("input")

// inputs.forEach(input => {
//     input.style.transition = "0.3s"

//     input.onfocus = function() {
//         this.style.outline = "none"
//         this.style.border = "red 3px solid"
//         this.style.padding = "15px"
//     }

//     input.onblur = function() {
//         this.style.border = ""
//         this.style.padding = "0px"
        
//         form.style.border = "2px solid blue"
//         form.style.padding = "0px"
//     }
// })


// cw2

let name = document.getElementById("name")
let email = document.getElementById("email")
let pass = document.getElementById("pass")

let h1 = document.getElementById("h1")
let h2 = document.getElementById("h2")
let h3 = document.getElementById("h3")

name.oninput = () => {
    h1.textContent = name.value
}

email.onchange = () => {
    h2.textContent = email.value
}

pass.onchange = () => {
    h3.textContent = pass.value
}