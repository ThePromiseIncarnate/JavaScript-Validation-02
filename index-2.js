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

function hasShortName(firstName) {
    let nameLength = firstName.length;
    if (nameLength < 5) {
        return true
    } else {
        return false
    }
}

function hasMediumName(firstName) {
    let nameLength = firstName.length;
    if (5 <= nameLength <= 7) {
        return true
    } else {
        return false
    }
}

function startsWithR(firstName) {
    return firstName.charAt(0) === "R"
}

function hasAnI(firstName) {
    return firstName.includes("i");
}

function tellFortune(input) {
    let m = hasLongName(input);
    if (m) {
        console.log(`${input} will marry late in life`);
    } 

    let n = hasShortName(input);
    if (n) {
        console.log(`${input} will marry within a year`)
    }

    let o = hasMediumName(input);
    if (o) {
        console.log(`${input} will encounter a once-in-a-lifetime opurtunity`)
    }

    let p = startsWithR(input);
    if (p) {
        console.log(`${input} will be rich`)
    }

    let q = hasAnI(input);
    if (q) {
        console.log(`${input} will fall in love this week`)
    }
}

tellFortune(inputOne);
tellFortune(inputTwo);
tellFortune(inputThree);
tellFortune(inputFour);
tellFortune(inputFive);