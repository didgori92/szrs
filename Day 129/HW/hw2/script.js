let images = ["audi.jpg", "bmw.jpg", "ferrari2.jpg", "fordmustang.jpg"]

let index = 0

let sliderimg = document.getElementById("sliderimg")
let prevbtn = document.getElementById("prevbtn")
let nextbtn = document.getElementById("nextbtn")

nextbtn.addEventListener("click", function() {
    index++
    if(index >= images.length) {
        index = 0
    }
    sliderimg.src = images[index]
})

prevbtn.addEventListener("click", function() {
    index--
    if(index < 0) {
        index = images.length - 1
    }
    sliderimg.src = images[index]
})