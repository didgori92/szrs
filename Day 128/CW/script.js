// cw1

// let h1 = document.createElement("h1")
// document.body.appendChild(h1)

// function clock() {
//     let now = new Date()

//     let year = now.getFullYear()
//     let month = now.getMonth() + 1
//     let day = now.getDate()

//     let hours = now.getHours()
//     let minutes = now.getMinutes()
//     let seconds = now.getSeconds()

//     h1.textContent = `year: ${year} | month: ${month} | date: ${day} — ${hours}:${minutes}:${seconds}`
// }

// clock()


// cw2

let time = document.querySelector(".time")

setInterval(() => {
    let now = new Date()

    let hours = now.getHours()
    let minute = now.getMinutes()
    let second = now.getSeconds()

    if (hours < 10) hours = `0${hours}`
    if (minute < 10) minute = `0${minute}`
    if (second < 10) second = `0${second}`

    time.textContent = `${hours}:${minute}:${second}`
}, 1000)