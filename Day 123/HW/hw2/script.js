let like = document.querySelector(".like")
let likect = document.querySelector(".counter")
let popular = document.querySelector(".poptext")

let likes = 0

like.onclick = function() {
    likes += 1
    likect.textContent = likes

    if(likes > 10) {
        popular.textContent = "Popular Post!"
    }

    if(likes >= 50) {
        popular.style.color = "gold"
    }
}