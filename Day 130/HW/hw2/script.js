let disp = document.getElementById("disp")
let numbtns = document.querySelectorAll(".numbtn")
let opbtns = document.querySelectorAll(".opbtn")
let delbtn = document.getElementById("del")
let resetbtn = document.getElementById("reset")
let eqbtn = document.getElementById("equals")

let expr = ""
let solved = false

for(let btn of numbtns) {
    btn.addEventListener("click", function() {
        let val = btn.getAttribute("data-val")

        if(solved) {
            expr = ""
            solved = false
        }

        expr += val
        disp.textContent = expr
    })
}

for(let btn of opbtns) {
    btn.addEventListener("click", function() {
        let op = btn.getAttribute("data-op")

        if(expr === "" || solved) {
            solved = false
        }

        let lastchar = expr.slice(-1)
        if(lastchar === " " || lastchar === "+" || lastchar === "-" || lastchar === "x" || lastchar === "/") {
            return
        }

        expr += " " + op + " "
        disp.textContent = expr
    })
}

eqbtn.addEventListener("click", function() {
    if(expr === "") {
        return
    }

    let parts = expr.split(" ")
    if(parts.length < 3 || parts[parts.length - 1] === "") {
        return
    }

    let num1 = Number(parts[0])
    let op = parts[1]
    let num2 = Number(parts[2])

    let res = 0
    if(op === "+") {
        res = num1 + num2
    } else if(op === "-") {
        res = num1 - num2
    } else if(op === "x") {
        res = num1 * num2
    } else if(op === "/") {
        if(num2 === 0) {
            expr = "Error"
            disp.textContent = expr
            solved = true
            return
        }
        res = num1 / num2
    }

    expr = String(res)
    solved = true
    disp.textContent = expr
})

delbtn.addEventListener("click", function() {
    if(solved || expr === "Error") {
        expr = ""
        solved = false
        disp.textContent = "0"
        return
    }

    if(expr[expr.length - 1] === " ") {
        expr = expr.slice(0, -3)
    } else{
        expr = expr.slice(0, -1)
    }

    if(expr === "") {
        disp.textContent = "0"
    } else{
        disp.textContent = expr
    }
})

resetbtn.addEventListener("click", function() {
    expr = ""
    solved = false
    disp.textContent = "0"
})