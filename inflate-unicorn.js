// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log("Inflate The Unicorn!")

let unicorn0 = document.getElementById("unicorn0")
let unicorn1 = document.getElementById("unicorn1")
let unicorn2 = document.getElementById("unicorn2")

let inflationLevel0 = 0
let inflationLevel1 = 0
let inflationLevel2 = 0

//onclick = the name of the function: i.e. clickedUnicorn

unicorn0.onclick = clickedUnicorn
unicorn1.onclick = clickedUnicorn
unicorn2.onclick = clickedUnicorn


// figure out which unicorn I clicked on [x]
// increase its inflation level (there are 4 levels/pictures)
// change the source of the image to the new picture


function clickedUnicorn(event) {
    let unicorn = event.target
    console.log(unicorn);

    if (unicorn.id == "unicorn0") {
        inflationLevel0++

        // write an if statement so that if inflation level is at 4, we reset it to 0. 

        if (inflationLevel0 == 4)
            inflationLevel0 = 0

        unicorn.src = "./images/unicorn-" + inflationLevel0 + ".png"

    }
}