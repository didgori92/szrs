let red = document.getElementById("red")
let yellow = document.getElementById("yellow")
let green = document.getElementById("green")

document.onkeydown = (event) => {
    let key = event.key.toUpperCase()

    if(key === "R") {
        red.classList.add("active")
    } else if(key === "Y") {
        yellow.classList.add("active")
    } else if(key === "G") {
        green.classList.add("active")
    }
}

document.onkeyup = (event) => {
    let key = event.key.toUpperCase()

    if(key === "R") {
        red.classList.remove("active")
    } else if(key === "Y") {
        yellow.classList.remove("active")
    } else if(key === "G") {
        green.classList.remove("active")
    }
}