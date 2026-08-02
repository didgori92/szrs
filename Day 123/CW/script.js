// cw1

function create() {

    let img = document.createElement("img")
    img.src = "goa.jpg"
    document.body.appendChild(img)

    let h1 = document.createElement("h1")
    h1.textContent = "hello i am here"
    h1.setAttribute("class", "red")
    document.body.appendChild(h1)

}


// cw2

let p = document.getElementById("par")

function double() {
    p.textContent = "🔓 Unlocked"
    p.style.color = "green"
}