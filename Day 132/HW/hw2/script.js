let fruits = []

function rndr() {
    let lst = document.getElementById("frtlst")
    lst.innerHTML = ""

    for(let i = 0; i < fruits.length; i++) {
        let li = document.createElement("li")
        li.textContent = fruits[i]
        lst.append(li)
    }
}

let btns = document.querySelectorAll(".subbtn")

btns.forEach(function (btn) {
    btn.addEventListener("click", function () {
        fruits.push(btn.textContent)
        rndr()
    })
})