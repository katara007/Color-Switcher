const buttons = document.querySelectorAll(".btn")
const body = document.querySelector("body")

buttons.forEach(function (button) {
    // console.log(button);
    button.addEventListener("click", function (event) {
        // console.log(event);
        // console.log(event.target);
        if (event.target.id === "R") {
            body.style.backgroundColor = "red"
        }
        if (event.target.id === "W") {
            body.style.backgroundColor = "antiquewhite"
        }
        if (event.target.id === "BL") {
            body.style.backgroundColor = "blue"
        }
        if (event.target.id === "Y") {
            body.style.backgroundColor = "Yellow"
        }
        if (event.target.id === "O") {
            body.style.backgroundColor = "orchid"
        }
    });
});