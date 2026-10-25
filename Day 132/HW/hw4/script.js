let scores = []

function rndr() {
    let lst = document.getElementById("scrlst")
    let sumtxt = document.getElementById("sumtxt")
    
    lst.innerHTML = ""
    let total = 0

    for(let i = 0; i < scores.length; i++) {
        let li = document.createElement("li")
        li.textContent = scores[i] + " points"
        lst.append(li)
        total += scores[i]
    }

    sumtxt.textContent = "Total: " + total + " points"
}

let buttons = document.querySelectorAll(".subbtn")

for(let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function() {
        let val = Number(this.getAttribute("data-val"))
        scores.push(val)
        rndr()
    })
}