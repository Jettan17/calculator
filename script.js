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
let operation = "";
let current = "";
let operationDisplayed = false;
let resultDisplayed = false;
const display = document.querySelector(".display");

//Number buttons logic
const numberButtons = document.querySelectorAll(".numbers button")

numberButtons.forEach(button => {
    if (button.className != "AC") {
        button.addEventListener("click", (e) => {
            //numbers buttons
            if (resultDisplayed || operationDisplayed) {
                //overwrite display
                current = overwrite(e.target, current, display);
                operationDisplayed = false;
                resultDisplayed = false;
            } else if (!operationDisplayed) {
                if (e.target.className != "." || !display.textContent.includes(".")) {
                    //concat display
                    current = populate(e.target, current, display);
                }
            }
        });
    } else {
        button.addEventListener("click", () => {
            //clear button
            current = "";
            display.textContent = current;
            first = 0;
            second = 0;
            operation = "";
            operationDisplayed = false;
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
            } else {
                //overwrite operation
                operation = e.target.className;

                //update display
                display.textContent = operation;
            }
        });
    } else {
        button.addEventListener("click", () => {
            //equals button
            if (operation != "") {
                //store second number
                second = parseFloat(current);

                //get result and update display
                current = operate(first, second, operation).toFixed(2);

                //update to int if possible
                if (current.slice(-2) == "00") {
                    current = current.slice(0, -3);
                }

                //update display
                display.textContent = current;
                resultDisplayed = true;
            }
        })
    }
});