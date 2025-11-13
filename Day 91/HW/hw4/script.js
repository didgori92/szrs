let list1 = ["Luka","Nino","Ana","Giorgi","Tamar","Levan","Mariam","Beka","Saba","Keti"]

let ind = Number(prompt("Enter an index (0-9): "))

if (ind < 0 || ind >= list1.length) {
    console.log("Incorrect index")
} else {
    list1.splice(ind, 3)
    console.log(list1)
}