let box = document.getElementById("box")
let colors = ["#ff6b6b", "#1dd1a1", "#feca57", "#ff9ff4", "#54a0ff"]

box.onwheel = () => {
    box.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)]
}