let nameinp = document.getElementById("cardname")
let numinp = document.getElementById("cardnum")
let mminp = document.getElementById("expmm")
let yyinp = document.getElementById("expyy")
let cvcinp = document.getElementById("cardcvc")

let namedisp = document.getElementById("namedisplay")
let numdisp = document.getElementById("numdisplay")
let mmdisp = document.getElementById("mmdisplay")
let yydisp = document.getElementById("yydisplay")
let cvcdisp = document.getElementById("cvcdisplay")

let confirmbtn = document.getElementById("confirmbtn")

function isnum(str) {
    if(str === "") {
        return false
    }
    for(let char of str) {
        if(char < '0' || char > '9') {
            return false
        }
    }
    return true
}

confirmbtn.addEventListener("click", function(e) {
    e.preventDefault()

    let rawnum = numinp.value.split(" ").join("")
    let mmval = Number(mminp.value)
    let yyval = Number(yyinp.value)
    let curyy = Number(String(new Date().getFullYear()).slice(-2))

    if(!isnum(rawnum)) {
        return alert("Wrong format, numbers only for card number!")
    }
    if(!isnum(mminp.value) || mmval < 1 || mmval > 12) {
        return alert("Please enter a valid month (01-12)!")
    }
    if(!isnum(yyinp.value) || yyval < curyy) {
        return alert("Please enter a valid future year!")
    }
    if(!isnum(cvcinp.value) || cvcinp.value.length < 3) {
        return alert("Wrong format, 3 digits required for CVC!")
    }

    if(nameinp.value === "") {
        namedisp.textContent = "JANE APPLESEED"
    } else {
        namedisp.textContent = nameinp.value.toUpperCase()
    }

    let formatted = ""
    for(let i = 0; i < rawnum.length; i++) {
        if(i > 0 && i % 4 === 0) {
            formatted += " "
        }
        formatted += rawnum[i]
    }

    numinp.value = formatted
    numdisp.textContent = formatted
    
    let formattedMM = mminp.value
    if(formattedMM.length === 1) {
        formattedMM = "0" + formattedMM
    }
    mmdisp.textContent = formattedMM

    let formattedYY = yyinp.value
    if(formattedYY.length === 1) {
        formattedYY = "0" + formattedYY
    }
    yydisp.textContent = formattedYY

    cvcdisp.textContent = cvcinp.value
})