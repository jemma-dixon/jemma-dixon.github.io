alert('Hello from JS!');
// console.log("it's working".toUpperCase());

// if (1+1===2) {
// console.log("MATH STILL WORKS!");
// }

// let random = Math.random();
// if (random < 0.5) {
// console.log ("YOUR NUMBER IS LESS THAN 0.5!")
// console.log (random);
//  }

// const age = 64;
//if (age < 5) {
//  console.log ("You are a babt. You get in for free!")
//} else if (age < 10) {
//  console.log ("You are a child. You pay $10")
//} else if (age <65) {
//  console.log ("You are an adult. You pay $20")
//} else if (age >=65) {
//  console.log ("You are a senior. You pay $10")
//}

const password = prompt("please enter a new password");

// Password must be 6+ characters
if (password.length >= 6) {
    console.log("LONG ENOUGH PASSWORD!")
} else {
    console.log("PASSWORD TOO SHORT! MUST BE 6+ CHARACTERS!")
}
// Password cannot include space
if (password.indexOf(' ') === -1) {
    console.log("Good job! No space!")
} else {
    console.log("Password cannot contain spaces!")
}

// A better way to write this is to get rid of the "LONG ENOGUH PASSWORD!" PROMPT
// and go like this: (this is an example of Nesting Conditionals)

if (password.length >= 6) {
    if (password.indexOf(' ') === -1) {
        console.log("Valid Password!")
    } else {
        console.log("Password cannot contain spaces!")
    }
} else {
    console.log("PASSWORD TOO SHORT! MUST BE 6+ CHARACTERS!")
}




