let nms = []

document.getElementById("addbtn").addEventListener("click", function () {
    nms.push("Goga")

    let lst = document.getElementById("namelist")
    lst.innerHTML = ""

    for 
    (let i = 0; i < nms.length; i++) {
        let li = document.createElement("li")
        li.textContent = nms[i]
        lst.append(li)
    }
})