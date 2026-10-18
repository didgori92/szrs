let products = []

let els = {
    nameinp: document.getElementById("nameinp"),
    priceinp: document.getElementById("priceinp"),
    addbtn: document.getElementById("addbtn"),
    prodcnt: document.getElementById("prodcnt")
}

function rndr() {
    els.prodcnt.innerHTML = ""

    for(let i = 0; i < products.length; i++) {
        let card = document.createElement("div")
        card.className = "prodcard"

        let title = document.createElement("h3")
        title.textContent = products[i].name

        let price = document.createElement("p")
        price.textContent = products[i].price + " GEL"

        card.append(title)
        card.append(price)
        els.prodcnt.append(card)
    }
}

els.addbtn.addEventListener("click", function () {
    let nameval = els.nameinp.value.trim()
    let priceval = els.priceinp.value.trim()

    if(nameval !== "" && priceval !== "") {
        let prod = {
            name: nameval,
            price: priceval
        }

        products.push(prod)
        rndr()

        els.nameinp.value = ""
        els.priceinp.value = ""
    }
})