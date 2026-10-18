// cw1

// let box = document.getElementById("list")

// let stuff = ["lemon", "melon", "thing", "123"]

// stuff.forEach(item => {
//     let p = document.createElement("p")

//     p.textContent = item

//     box.appendChild(p)
// })


// cw2

let inp = document.getElementById("inp")
let box = document.getElementById("box")
let button = document.getElementById("bt")

let list = []

bt.addEventListener("click", () => {
    
    let h = document.createElement("h1")
    h.textContent = inp.value
    
    list.push(h)
    
    box.innerHTML = ""
    list.forEach(item => {
        box.append(item)      
    })

    
    inp.value = ""
})