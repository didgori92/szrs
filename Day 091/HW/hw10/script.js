let list1 = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 40, 50, 110, 120]

for (let i = 0; i < list1.length; i++) {
    if (list1[i] === 40 || list1[i] === 30) {
        console.log(i)
    }
}