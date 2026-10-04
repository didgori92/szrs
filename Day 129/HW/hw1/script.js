let watchimg = document.getElementById("img")
let cols = document.getElementById("cols")

cols.addEventListener("click", function(e) {
    if(e.target.classList.contains("black")) {
        watchimg.src = "watch.png"
    } else if(e.target.classList.contains("red")) {
        watchimg.src = "red.png"
    } else if(e.target.classList.contains("blue")) {
        watchimg.src = "blue.png"
    } else if(e.target.classList.contains("purple")) {
        watchimg.src = "purple.png"
    }
})

let time = document.getElementById("time")
let feats = document.getElementById("feats")
let mode = "time"

feats.addEventListener("click", function(e) {
    if(e.target.id === "timebtn") {
        mode = "time"
    } else if(e.target.id === "heartbtn") {
        mode = "heart"
    }
})

setInterval(function() {
    if(mode === "time") {
        
        let now = new Date()

        let hours = now.getHours()
        if (hours < 10) {
            hours = "0" + hours
        }

        let minutes = now.getMinutes()
        if (minutes < 10) {
            minutes = "0" + minutes
        }

        let seconds = now.getSeconds()
        if (seconds < 10) {
            seconds = "0" + seconds
        }

        time.textContent = `${hours}:${minutes}:${seconds}`
    } else if(mode === "heart") {
        time.innerHTML = `<img src="heart.png" alt="Heart Rate" style="width: 120px;">`
}
}, 1000)