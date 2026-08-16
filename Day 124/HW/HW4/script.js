let ball = document.getElementById("ball")
let size = 150

ball.onmouseover = () => {
    ball.style.width = "180px"
    ball.style.height = "180px"
}

ball.onmouseout = () => {
    ball.style.width = "150px"
    ball.style.height = "150px"
    size = 150
}

ball.onwheel = () => {
    size += 20
    ball.style.width = size + "px"
    ball.style.height = size + "px"
}