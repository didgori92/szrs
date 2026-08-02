let ball = document.querySelector(".ball")
let size = 50

ball.onclick = function() {
    size += 10
    ball.style.width = size + "px"
    ball.style.height = size + "px"
}

ball.ondblclick = function() {
    ball.style.display = "none"
}