document.onkeydown = (event) => {

    let letter = event.key
    
    let button = document.getElementById("btn" + letter)
    
    
    button.classList.add("active")
    
}

document.onkeyup = (event) => {
    let letter = event.key
    
    let button = document.getElementById("btn" + letter)
    
    
    button.classList.remove("active")
    
}