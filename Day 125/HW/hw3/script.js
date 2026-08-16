let space = document.getElementById("spacebt")

document.onkeydown = (event) => {
    if(event.key === " " || event.key === "Spacebar") {
        space.innerText = "Pressed!"
    } else {
        space.innerText = "Wrong key!"
    }
}

document.onkeyup = (event) => {
    if(event.key === " " || event.key === "Spacebar") {
        space.innerText = "Release!"
    }
}