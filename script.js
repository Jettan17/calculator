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

function populate(elem, current, display) {
    //update display
    display.textContent = `${display.textContent}${elem.className}`;

    //store current num
    current = `${current}${elem.className}`;

    return current;
}

function overwrite(elem, current, display) {
    //overwrite display
    display.textContent = elem.className;

    //overwrite current
    current = elem.className;

    return current;
}

let first = 0;
let second = 0;
let operation = "+";
let result = 0;
let current = "";
let operationDisplayed = false;
const display = document.querySelector(".display");

//Number buttons logic
const numberButtons = document.querySelectorAll(".numbers button")

numberButtons.forEach(button => {
    if (button.className != "AC") {
        button.addEventListener("click", (e) => {
            if (!operationDisplayed) {
                if (e.target.className != "." || !display.textContent.includes(".")) {
                    //concat display
                    current = populate(e.target, current, display);
                }
            } else {
                //overwrite display
                current = overwrite(e.target, current, display);
                operationDisplayed = false;
            }
        });
    } else {
        button.addEventListener("click", () => {
            //clear button
            current = "";
            display.textContent = current;
        })
    }
});

//Operation buttons logic
const operationButtons = document.querySelectorAll(".operations button")

operationButtons.forEach(button => {
    if (button.className != "=") {
        button.addEventListener("click", (e) => {
            if (!operationDisplayed) {
                //store first number
                first = parseFloat(current);
                
                //store operation
                operation  = e.target.className;
                operationDisplayed = true;

                //update display
                display.textContent = operation;
            }
        });
    } else {
        button.addEventListener("click", () => {
            //store second number
            second = parseFloat(current);

            //get result and update display
            current = operate(first, second, operation).toFixed(2);

            //update to int if possible
            console.log(current.slice(-1,-3))
            if (current.slice(-1, -3) == "00") {
                current = current.slice(0, -2);
            }

            //update display
            display.textContent = current;
        })
    }
});