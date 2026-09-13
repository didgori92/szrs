let inp = document.getElementById("inp")
let add = document.getElementById("add")
let box = document.getElementById("box")

let list = document.createElement("div")
list.id = "list"
box.appendChild(list)

add.addEventListener("click", function(e) {
    e.preventDefault()
    
    if(inp.value === "") {
        return
    }
    
    let row = document.createElement("div")
    row.className = "row"

    let item = document.createElement("span")
    item.textContent = inp.value

    let del = document.createElement("button")
    del.textContent = "delete"
    del.className = "del"

    del.addEventListener("click", function(e) {
        e.preventDefault()
        row.remove()
    })

    row.appendChild(item)
    row.appendChild(del)
    list.appendChild(row)

    inp.value = ""
})