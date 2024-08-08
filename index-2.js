let inputOne = "Julie"; 
let inputTwo = "Jamie"; 
let inputThree = "Kenneth";
let inputFour = "Regina"; 
let inputFive = "Royace";

// let firstName1 = input;
// let nameLength = firstName1.length;

// if (nameLength > 7) {
//     console.log("You will marry late in life.")
// }

function hasLongName(firstName) {
    let nameLength = firstName.length;
    if (nameLength > 7) {
        return true
    } else {
        return false
    }
}

function tellFortune(input) {
    let n = hasLongName(input);
    if (n) {
        console.log("You will marry late in life");
    } else {
        console.log("You will not marry late in life");
    }
}

tellFortune(inputOne);
tellFortune(inputTwo);
tellFortune(inputThree);
tellFortune(inputFour);
tellFortune(inputFive);