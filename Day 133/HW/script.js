let prodlis = []

let addbtn = document.getElementById("btnct")
let errs = document.querySelectorAll(".err")
let prodbox = document.getElementById("prodbox")

addbtn.addEventListener("click", function() {
    errs.forEach(function(e) {
        e.textContent = ""
    })

    let nameval = document.getElementById("name").value
    let priceval = document.getElementById("price").value
    let photoval = document.getElementById("photo").value
    let descval = document.getElementById("desc").value

    let hasError = false

    if(nameval === "") {
        errs[0].textContent = "Name cannot be empty"
        hasError = true
    }

    if(priceval === "" || Number(priceval) <= 0) {
        errs[1].textContent = "Price must be greater than 0"
        hasError = true
    }

    if(photoval === "") {
        errs[2].textContent = "Photo URL cannot be empty"
        hasError = true
    }

    if(descval === "") {
        errs[3].textContent = "Please select a category"
        hasError = true
    }

    if(hasError) {
        return
    }

    let product = {
        name: nameval,
        price: priceval,
        photo: photoval,
        category: descval
    }

    prodlis.push(product)
    rndr()
})

function rndr(filter = "all") {
    prodbox.innerHTML = ""

    prodlis.forEach(function(item) {
        if(filter === "all" || item.category === filter) {
            let card = document.createElement("div")
            
            let title = document.createElement("h3")
            title.textContent = item.name
            
            let price = document.createElement("p")
            price.textContent = "Price: $" + item.price
            
            let cat = document.createElement("p")
            cat.textContent = "Category: " + item.category

            let img = document.createElement("img")
            img.src = item.photo
            
            card.append(title, price, cat, img)
            prodbox.append(card)
        }
    })
}

let filterbtns = document.querySelectorAll(".filterbtn")

filterbtns.forEach(function(btn) {
    btn.addEventListener("click", function() {
        let cat = btn.getAttribute("data-cat")
        rndr(cat)
    })
})