// cw1

let stuff = [
  { name: "apple", price: 2 },
  { name: "banana", price: 5 },
  { name: "orange", price: 3 }
]

let max = stuff.reduce((acc, cur) => {
    if(cur.price > acc.price) {
        return cur
    } else {
        return acc
    }
})

console.log(max)

// cw2

