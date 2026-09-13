let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

let btn = document.getElementById("btn")
let info = document.getElementById("info")

btn.addEventListener("click", function() {
    let cur = new Date()
    let dayi = cur.getDay()
    let dayn = days[dayi]

    if (dayi === 0 || dayi === 6) {
        info.textContent = `Today is ${dayn} It's a weekend.`
    } else {
        info.textContent = `Today is ${dayn} It's a working day.`
    }
})