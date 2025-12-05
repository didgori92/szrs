let nums = [100, 50, 0, -300, 150, 20, 40, 900]

let min = nums[0]

for(let i = 0; i < nums.length; i++) {
    if (nums[i] < min) {
        min = nums[i]
    }
}

console.log(min)