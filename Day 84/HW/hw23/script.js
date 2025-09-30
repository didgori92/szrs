let seasonnum = Number(prompt("Enter a month number (1-12): "));
let monthNum = Number(prompt("Enter a month number (1-12): "))

if (seasonnum === 12 || seasonnum === 1 || seasonnum === 2) {
    season = "Winter";
} else if (seasonnum >= 3 && seasonnum <= 5) {
    season = "Spring";
} else if (seasonnum >= 6 && seasonnum <= 8) {
    season = "Summer";
} else if (seasonnum >= 9 && seasonnum <= 11) {
    season = "Autumn";
} else {
    season = "Invalid season";
}

if (monthNum === 1) {
    month = "january"
} else if (monthNum === 2) {
    month = "february"
} else if (monthNum === 3) {
    month = "march"
} else if (monthNum === 4) {
    month = "april"
} else if (monthNum === 5) {
    month = "may"
} else if (monthNum === 6) {
    month = "june"
} else if (monthNum === 7) {
    month = "july"
} else if (monthNum === 8) {
    month = "august"
} else if (monthNum === 9) {
    month = september
} else if (monthNum === 10) {
    month = "october"
} else if (monthNum === 11) {
    month = "november"
} else if (monthNum === 12) {
    month = "december"
} else {
    month = "invalid month"
}

console.log("the month is " + month + " and the season is " + season)