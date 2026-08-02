let bulb = document.querySelector(".bulb")
let status = document.querySelector(".status")

bulb.onclick = function() {
    document.body.classList.toggle("light-on")

    if (document.body.classList.contains("light-on")) {
        status.textContent = "🟡"
    } else {
        status.textContent = "⚫"
    }
}