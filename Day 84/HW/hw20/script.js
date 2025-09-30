let input = Number(prompt("Enter a number:"));
let isAvgOf5 = Number.isInteger((input - 5) * 2);
let isAvgOf10 = Number.isInteger((input - 10) * 2);

if (isAvgOf5 && !isAvgOf10) {
    console.log("The input is the average of 5");
} else {
    console.log("The input does not meet the condition.");
}