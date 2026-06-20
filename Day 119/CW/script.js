// cw1

/*

DOM არის document object model. ის იღებს html-ის ფაილს, რომელიც არის დოკუმენტი, და მას გადარქმნის ობიექტად

getElementsByTagName() არის ისეთი ფუნქცია რომელიც დაგვიბრუნებს ნებისმიერი html-ის ელემენტს. მაგალითად:
getElementsByTagName("p") წამოიღებს ყველა პარაგრაფს სიის სახით, მიუხედავად იმისა რომ რამდენი ფარაგრაფი არის 

*/


// cw2

// let p = document.getElementsByTagName("p")
// let h1 = document.getElementsByTagName("h1")

// console.log(p)
// console.log(h1)


// cw3

let p = document.getElementsByTagName("p")
let y = document.getElementsByClassName("y")
let q = document.getElementById("q")

console.log(p)
console.log(y)
console.log(q)