function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(a, b, op) {
    switch (op) {
        case ('+'):
            return add(a, b);
        case ('-'):
            return subtract(a, b);
        case ("*"):
            return multiply(a, b);
        case ("/"):
            return divide(a, b);
    }
}

function populate(elem, current) {
    //update display
    const display = document.querySelector(".display");
    display.textContent = `${display.textContent}${elem}`;

    //store current num
    current = `${current}${elem}`;
    console.log(current);

    return current;
}

let first = 0;
let second = 0;
let operator = "+";
let current = "";
let operatorActive = false;

const numberButtons = document.querySelectorAll(".numbers button")

numberButtons.forEach(button => {
    button.addEventListener("click", () => {populate(button.className, current)});
});