let password = document.querySelector(".password")
let realpass = "myPass123"

password.onclick = function() {
    let hidden = ""
    for (let i = 0; i < realpass.length; i++) {
        hidden += "*"
    }
    password.textContent = hidden
}

password.ondblclick = function() {
    password.textContent = realpass
}