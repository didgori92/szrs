let box = document.getElementById("box")

box.onmouseover = () => {
    box.textContent = "Mouse over"
}

box.onmouseout = () => {
    box.textContent = "Mouse out"
}

box.onmousedown = () => {
    box.textContent = "Mouse down"
}

box.onmouseup = () => {
    box.textContent = "Mouse up"
}

box.onwheel = () => {
    box.textContent = "Wheel moved"
}