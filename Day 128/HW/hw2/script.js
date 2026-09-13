let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

let date = document.getElementById("date")

let cur = new Date()
let dayn = days[cur.getDay()]
let monthn = months[cur.getMonth()]
let daynum = cur.getDate()
let yearn = cur.getFullYear()

date.textContent = `${dayn}, ${monthn} ${daynum}, ${yearn}`