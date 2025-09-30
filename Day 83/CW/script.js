
/* classwork 1 */
let Name = prompt("Enter your name: ");

if (Name === "Levani") {
    console.log("Our name is matching");
} else {
    console.log("They don't match");
}

/*classwork 2 */
var Name1 = prompt("Enter your name: ").toLocaleLowerCase()
var age = Number(prompt("Enter your age: "))

if (Name1 === "levani") 
    if (age === 19) {
        console.log("Our name and age are matching")
    } else if (Name1 === "levani") {
        if (age != 19) {
            console.log("Only name is matching")        
    }
    } else if (age === 19) {
        if (Name1 != "levani") {
            console.log("Only age is matching")        
    }
    } else if (Name1 !="Levani") {
        if (age != 19) {
            console.log("nothing is matching")
    }
    }