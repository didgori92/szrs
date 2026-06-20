// hw1

/*

DOM არის document object model. ის იღებს html-ის ფაილს, რომელიც არის დოკუმენტი, და მას გადარქმნის ობიექტად

განსხვავება getElementById, getElementsByTagName და getElementsByClassName-ს შორის არის საიდან მოაქვს ელემენტი. 
ClassName წამოიღებს ყველა ელემენტს რომელსაც აქვს იგივე კლასის სახელი. TagName წამოიღებს ელემენტის თაგის სახელით (მაგალითად p, h1, h2),
ხოლო ById წამოიღებს ელემენტს მინიჭებული id-ით (მაგალითად, p-ს id არის "first", წამოიღებს მხოლოდ მას)

*/


// hw2

let p = document.getElementsByClassName("first")

for(let i of p) {
    console.log(i.innerText)
}


// hw3

let img = document.getElementsByTagName("img")


// hw4

let button1 = document.getElementById("but1")
let button2 = document.getElementById("but2")
let button3 = document.getElementById("but3")


// hw5

let inputs = document.getElementsByClassName("myin")

console.log(inputs.length)


// hw6

let box = document.getElementById("box")

let tags = box.children


for(let tag of tags) {
    console.log(tag)
}


// hw7

// ვერ მოვახერხე