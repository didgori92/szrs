let list = [10, 100, 200, 300, 150, 20, 40, 1000, 150, 125, 900]

for (let i = 0; i < list.length; i++) {
    for (let j = 0; j < list.length - 1; j++) {

        if (list[j] > list[j + 1]) {
            [list[j], list[j + 1]] = [list[j + 1], list[j]]
        }

    }
}

console.log(list)