// cw 1

let counter = function(str) {

    let count = {
        letters: 0,
        numbers: 0,
        other: 0
    }

    str = str.toLowerCase()

   for(let i of str) {
        if(i >= "a" && i <= "z") {
            count.letters += 1
        } else if(i >= "0" && i <= "9") {
            count.numbers += 1        
        } else {
            count.other += 1
        }
    }

    return count

}

console.log(counter("asd123!@#"))

// cw 2


let sum = function(st) {

    let cn = {
        lett: 0,
        num: 0,
        oth: 0
    }


    let wr = "abcdefghijklmnopqrstuvwxyz"
    let nm = "1234567890"

    st = st.toLowerCase()

    for(let a of st) {
        if(wr.includes(a)) {
            cn.lett += 1
        } else if(nm.includes(a)) {
            cn.num += 1
        } else {
            cn.oth += 1
        }
    }

    let result = 1

    cn.lett !== 0 ? result = result * cn.lett : result = result
    cn.num !== 0 ? result = result * cn.num : result = result
    cn.oth !== 0 ? result = result * cn.oth : result = result

    return result
}

console.log(sum("asd123!@#"))