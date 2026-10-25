let list = []

let th = {
    but: document.getElementById("btn"),
    price: document.getElementById("price"),
    name: document.getElementById("nam"),
    lst: document.getElementById("lis")
}

function render() {
    th.lst.innerHTML = ""
    list.forEach(function(p) {
        let i = document.createElement("li")
        i.textContent = p.name + " - " + "$" + p.price
        th.lst.appendChild(i)
    })
}

th.but.addEventListener("click", function() {
    let prodname = th.name.value
    let prodprice = Number(th.price.value)

    if(prodname !== "" && prodprice > 0) {
        let newprod = {
            name: prodname,
            price: prodprice
        }
        list.push(newprod)
        render()
        th.name.value = ""
        th.price.value = ""
    }
})

let btnplus = document.getElementById("btnplus")
let btnminus = document.getElementById("btnminus")

btnplus.addEventListener("click", function() {
    let filtered = list.filter(p => p.price > 500)
    th.lst.innerHTML = ""
    filtered.forEach(p => {
        let i = document.createElement("li")
        i.textContent = p.name + " - " + "$" + p.price
        th.lst.appendChild(i)
    })
})

btnminus.addEventListener("click", function() {
    let filtered = list.filter(p => p.price < 500)
    th.lst.innerHTML = ""
    filtered.forEach(p => {
        let i = document.createElement("li")
        i.textContent = p.name + " - " + "$" + p.price
        th.lst.appendChild(i)
    })
})