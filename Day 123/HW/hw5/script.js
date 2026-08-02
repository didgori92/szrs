let counter = document.querySelector(".counter")
let count = 0

counter.onclick = function() {
    count += 1
    counter.textContent = count
}

counter.ondblclick = function() {
    count = 0
    counter.textContent = count
}