let square = document.querySelector(".square")

square.onclick = function() {
    square.style.backgroundColor = "blue"
}

square.ondblclick = function() {
    square.style.backgroundColor = "red"
}