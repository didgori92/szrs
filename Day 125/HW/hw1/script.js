let char = document.getElementById("character")

let locx = 0
let locy = 0

document.onkeydown = (event) => {
    if(event.key === "ArrowUp") {
        locy -= 10
    } else if(event.key === "ArrowDown") {
        locy += 10
    } else if(event.key === "ArrowLeft") {
        locx -= 10
    } else if(event.key === "ArrowRight") {
        locx += 10
    }

    char.style.left = locx + "px"
    char.style.top = locy + "px"
}

char.onmouseover = function() {
    char.innerText = "✨🧙‍♂️✨"
}

char.onmouseout = function() {
    char.innerText = "🧙‍♂️"
}