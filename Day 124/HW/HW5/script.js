let box = document.getElementById("box")

box.onmouseover = () => box.textContent = "Welcome!"
box.onmousedown = () => box.textContent = "Dont hold me 😅"
box.onmouseup = () => box.textContent = "Thanks!"
box.onmouseout = () => box.textContent = "Move your mouse here"