let box = document.getElementById("box")

box.onmousedown = () => {
    box.style.backgroundColor = "#816c25"
}

box.onmouseup = () => {
    box.style.backgroundColor = "#a07272"
}

box.onmouseover = () => {
    box.style.border = "3px solid #0984e3"
}

box.onmouseout = () => {
    box.style.border = "2px dashed #2e0606"
}