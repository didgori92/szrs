document.getElementById("regform").addEventListener("submit", function (e) {
    e.preventDefault()

    let usrval = document.getElementById("usr").value.trim()
    let emlval = document.getElementById("eml").value.trim()
    let pwdval = document.getElementById("pwd").value
    let cpwdval = document.getElementById("cpwd").value

    let usrerr = document.getElementById("usrerr")
    let emlerr = document.getElementById("emlerr")
    let pwderr = document.getElementById("pwderr")
    let cpwderr = document.getElementById("cpwderr")

    usrerr.textContent = ""
    emlerr.textContent = ""
    pwderr.textContent = ""
    cpwderr.textContent = ""

    let tr = true

    if(usrval === "") {
        usrerr.textContent = "Username cannot be blank."
        tr = false
    } else if(usrval.length < 3) {
        usrerr.textContent = "Username must be at least 3 characters long."
        tr = false
    }

    if(emlval === "") {
        emlerr.textContent = "Email cannot be blank."
        tr = false
    } else if(!emlval.includes("@") || !emlval.includes(".")) {
        emlerr.textContent = "Please enter a valid email address."
        tr = false
    }

    if(pwdval === "") {
        pwderr.textContent = "Password cannot be blank."
        tr = false
    } else if(pwdval.length < 6) {
        pwderr.textContent = "Password must be at least 6 characters long."
        tr = false
    }

    if(cpwdval === "") {
        cpwderr.textContent = "Please confirm your password."
        tr = false
    } else if(cpwdval !== pwdval) {
        cpwderr.textContent = "Passwords do not match."
        tr = false
    }

    if (tr) {
        alert("Registration successful!")

        document.getElementById("usr").value = ""
        document.getElementById("eml").value = ""
        document.getElementById("pwd").value = ""
        document.getElementById("cpwd").value = ""
    }
})