let genbt = document.querySelector(".genbt")
let smile = document.querySelector(".smile")

let smileys = ["😀","😂","😍","😎","😭","😡","🥶","🤔","😴","🥳"]

genbt.onclick = function() {
    let random = smileys[Math.floor(Math.random() * smileys.length)]
    smile.textContent += random + " "
}