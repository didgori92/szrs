let names = []

let els = {
    inp: document.getElementById("ninp"),
    btn: document.getElementById("addbtn"),
    lst: document.getElementById("nmslst")
}

function rndr() {
    els.lst.innerHTML = ""

    for (let i = 0; i < names.length; i++) {
        let li = document.createElement("li")
        li.textContent = names[i]
        els.lst.append(li)
    }
}

els.btn.addEventListener("click", function () {
    let val = els.inp.value.trim()

    if(val !== "") {
        names.push(val)
        rndr()
        els.inp.value = ""
    }
})