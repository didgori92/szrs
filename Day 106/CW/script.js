// cw1

let month = prompt("insert a month (1-12): ")

switch(month) {
    case "1": 
        console.log("january")
        break
    case "2": 
        console.log("february")
        break
    case "3": 
        console.log("march")
        break
    case "4": 
        console.log("april")
        break
    case "5": 
        console.log("may")
        break
    case "6": 
        console.log("june")
        break
    case "7": 
        console.log("july")
        break
    case "8": 
        console.log("august")
        break
    case "9": 
        console.log("september")
        break
    case "10": 
        console.log("october")
        break
    case "11": 
        console.log("november")
        break
    case "12": 
        console.log("december")
        break
    default:
        console.log("Month doesnt exist")   
}

// cw2

let command = prompt("შეიყვანე ბრძანება: start, pause, resume, exit");


switch(command) {
    case "start":
        console.log("თამაში დაიწყო")
        break
    case "pause":
        console.log("თამაში შეჩერებულია")
        break
    case "resume":
        console.log("თამაში განახლდა")
        break
    case "exit":
        console.log("თამაში დასრულდა")
        break
    default:
        console.log("უცნობი ბრძანება")
}

// cw3

let word = prompt("insert a word: ")

word[0] == "g" && word.length > 5 ? console.log("starts with g and more than 5 letter") : console.log("doesnt start with g and less than 5 letter")