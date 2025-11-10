let namelist = ["andri", "akaki", "giorgi", "abuli", "sandro", "aleqsi", "nino", "daviti"]

for (let i = 0; i < namelist.length; i++) {
    let name = namelist[i]
    if (name[0] === "a" && name[name.length - 1] === "i" && name.length === 5) {
        console.log(name)
    }
}