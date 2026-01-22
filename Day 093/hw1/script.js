let numb = [100, 50, 0, -300, 150, 20, 40, 900]

let min = numb[0]

for(let i = 0; i < numb.length; i++) {
    if (nums[i] < min) {
        min = numb[i]
    }
}

console.log(min)