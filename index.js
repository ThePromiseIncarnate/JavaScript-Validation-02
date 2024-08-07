console.log("Hello from index.js");
myName = "Joshua"; 

if (myName.length > 7) {
    console.log("will marry late in life")
}

if (myName.length < 5) {
    console.log("will marry within a year")
}

if (5 <= myName.length <= 7) {
    console.log("will encounter a once-in-a-lifetime opurtunity")
}

if (myName.charAt(0) === "R") {
    console.log("will be rich")
}

if (myName.match("i")) {
    console.log("will fall in love this week")
}