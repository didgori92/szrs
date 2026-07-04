// hw1

/*

querySelector არის ისეთი ფუნქცია რომელიც მხოლოდ გამოიტანს პირველ ელემენტს რომელიც ემთხვევა სელექტორს

მაგალითად, თუ გვაქ 4 პარაგრაფი რომელსაც აქვს ერთი კლასი, და ვწერთ:

let paragraphs = document.querySelector("paragraph")

ეს გამოიტანს მხოლოდ და მხოლოდ პირველ ელემენტს რომელსაც ემთხვევა სელექტორი


querySelectorAll დააბრუნებს ყველა ელემენტს რომელიც ემთხვევა სელექტორს

მაგალითად, თუ გვაქ 4 პარაგრაფი რომელსაც აქვს ერთი კლასი, და ვწერთ:

let paragraphs = document.querySelectorAll("paragraph")
paragraphs შეინახავს ყველა პარაგრაფს რომელსაც აქვს იგივე კლასი

*/


// hw2

/*

setAttributes-ის გამოყენებით ჩვენ შეგვიძლია რომ ნებისმიერი HTML-ის ელემენტს მივუნიჭოთ რაიმე ატრიბუტი

მაგალითად:

img.setAttribute("alt", "alternative")

ეს img-ის მიუნიჭებს alt ატრიბუტს, და შემდეგ რა იქნება ატრიბუტის მნიშვნელობა.

როცა ნებისმიერ set-ს ვაკეთებთ, ჯერ უნდა დავწეროთ რა ატრიბუტი გვინდა, და მერე მისი მნიშვნელობა რა იყოს


getAttribute-ს ვხმარობთ როცა გვინდა რაიმე ელემენტის ატრიბუტი

მაგალითად:

img.getAttribute("src")

ეს დაგვიბრუნებს რა არის src ატრიბუტში შენახული (მაგალითად [ფოტოს სახელი].jpg)

*/


// hw3


let tof = true
 
let some = document.getElementById("smth")
 
if(tof) {
    some.innerHTML = `
        <h2>Levani Gendzekhadze</h2>
        <img src="img.PNG" alt="profile"/>
    `
} else {
    some.innerHTML = `
        <p>Levani Gendzekhadze</p>
        <img src="omlette.jpeg" alt="other" />
    `
}


// hw4

/*

innerText აბრუნებს მხოლოდ ისეთ ტექსტს რომელიც უკვე მოჩანს საიტზე. თუ რამე ტექსტს აქვს display: none, არ დააბრუნებს

მაგალითად:

el.innerText = "<b>hi</b>" ეკრანზე გამოჩნდება: <b>hi</b> ტექსტად


innerHTML-ს შეუძლია რომ წაიკითხოს და ჩაწეროს ნებისმიერი ელემენტი HTML-ის კოდში, აუცილებელია რომ დავუწეროთ თეგები

მაგალითად:

el.innerHTML = "<b>hi</b>"  ეკრანზე გამოჩნდება hi bold-ად
 
textContent-ი კითხულობნს და წერს ტექსტს, მიუხედავად CSS-ში აქვს თუ არა რამე მინიჭებული. თეგები არ ჭირდება რადგან წერს მხოლოდ ტექსტს

მაგალითად:

el.textContent = "<b>hi</b>" ეკრანზე გამოჩნდება <b>hi</b> გამოჩნდება უბრალო ტექსტად

*/


// hw5

const name = "levani"
const thing = document.getElementById("yeag")

thing.setAttribute("id", "levani")

const store = thing.getAttribute("id")

if(store === name) {
    thing.setAttribute("class", "fancy")
    thing.innerHTML = `<h1>${name}</h1>`
} else {
    thing.setAttribute("class", "fancy")
    thing.textContent = "hello"
}


// hw6

let hmmmm = document.getElementById("hm")
let pass = "1234"
let enter = prompt("enter password: ")
 
if(enter === pass) {
  hmmmm.textContent = "Levani"
} else {
  hmmmm.textContent = "incorrect password"
}


// hw7

function prime(num) {
  if(num < 2) {
    return false
  }
 
  for(let i = 2; i <= Math.sqrt(num); i++) {
    if(num % i === 0) {
      return false
    }
  }
 
  return true
}
 
let result = document.getElementById("7res")
let uls = document.getElementById("7ul")
 

let numb = Number(prompt("enter a number: "))
 
if(prime(numb)) {
    uls.textContent = "this isnt a prime number"
} else {
    uls.textContent = `${numb} isnt a prime, divisors: `
    
    let listh = ''
    
    for(let i = 1; i <= numb; i++) {
        if(numb % i === 0) {
        listh += `<li>${i}</li>`
        }
    }

    uls.innerHTML = listh
}