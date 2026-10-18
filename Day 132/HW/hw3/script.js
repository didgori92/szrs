let names = []

function rndr() {
    let lst = document.getElementById("nmslst")
    lst.innerHTML = ""

    for(let i = 0; i < names.length; i++) {
        let li = document.createElement("li")
        li.textContent = names[i]
        lst.append(li)
    }
}

document.getElementById("addbtn").addEventListener("click", function () {
    let inp = document.getElementById("ninp")
    let val = inp.value.trim()

    if(val !== "") {
        names.push(val)
        rndr()
        inp.value = ""
    }
})