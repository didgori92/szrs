let stars = document.querySelector(".stars")
let starct = 0

stars.onclick = function() {
    if(starct < 5) {
        starct += 1
        stars.textContent = "⭐".repeat(starct)
    }
}

stars.ondblclick = function() {
    starct = 0
    stars.textContent = ""
}