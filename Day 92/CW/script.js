// classwork 1

//let list1 = ["levani", "giorgi", "ana", "nino", "jose", "mari", "luka", "saba", "tina", "davit"]

//let sliced1 = list1.slice(3, 8)
//let sliced2 = list1.slice(0, 6)

//console.log(sliced1)
//console.log(sliced2)


// classwork 2
// მომხმარებელს შემოატანინე 5-ჯერ სიტყვა. ეს სიტყვა ჩაამატეთ სიაში. იმ შემთხვევაში თუ რომელიმე სიტყვა განმეორდება,
// ისე რომ თუნდაც სხვადასხვა შრიფტით ეწეროს, მაშინ ეს სტრინგები გადაიტანეთ ახალ სიაში


let list1 = []
let list2 = []

for(let i = 0; i < 5; i++) {
    let input = prompt("Enter a word: ").toLowerCase()
    if(list1.includes(input)) {
        list2.push(input)
    }
    list1.push(input)
}

console.log(list1)
console.log(list2)