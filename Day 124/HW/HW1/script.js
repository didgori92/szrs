let box = document.getElementById("box")
box.onmouseover = () => box.style.backgroundColor = "#2ed573"
box.onmouseout = () => box.style.backgroundColor = "#ff6b6b"
box.onmousedown = () => box.style.transform = "scale(0.9)"
box.onmouseup = () => box.style.transform = "scale(1)"