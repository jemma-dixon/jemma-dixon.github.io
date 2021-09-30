

// start with a basic game loop / while loop
// create a prompt, create variable names. input = the variable.
// while 'something' or 'x' is not equal to quit, keep asking the prompt.

let input = prompt ("What would you like to do?")
    while (input !== 'quit') {
        input = prompt("What would you like to do?")

    }

// as long as they don't write 'quit' they will keep seeing the prompt

console.log("OK, YOU QUIT THE APP!")

// We will see this message if we open the console.