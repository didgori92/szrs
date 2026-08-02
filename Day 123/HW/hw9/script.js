let rollbt = document.querySelector(".roll")
let result = document.querySelector(".result")

rollbt.onclick = function() {
    let num = Math.floor(Math.random() * 100) + 1;
    if(num === 100) {
        result.textContent += " 🎉 JACKPOT"
    } else {
        result.textContent += " " + num
    }
}

rollbt.ondblclick = function() {
    result.textContent = ""
}