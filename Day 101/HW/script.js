// hw1 

let movie = {
    name: "fury",
    author: "David Ayer",
    rating: "8.7/10",
    date: "2014"
}

console.log(movie)

// hw2 

let user = {
  email: prompt("enter your Email: "),
  password: prompt("enter your password: ")
}

console.log(user)

// hw3

let objective = {
    a: "A",
    b: "B",
    c: "C",
    d: "D"
}

delete objective.a
delete objective.c
objective.d = "d"

console.log(objective)

// hw4

let users = {
    name: "levani",
    surname: "gendzekhadze",
    age: 18,
    user: prompt("enter a text: ")
}

console.log(users)

// hw5

let people = [
  {name: "Giorgi", age: 18},
  {name: "Nika", age: 20},
  {name: "Luka", age: 19},
  {name: "Ana", age: 17},
  {name: "Mariam", age: 21}
]

for (let i = 0; i < people.length; i++) {
  console.log(people[i].name);
}