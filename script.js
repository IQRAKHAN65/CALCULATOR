const display = document.getElementById("display");

const buttons = document.querySelectorAll("button");


function calculate() {

    try {

        let expression = display.value;

        expression = expression.replace(/×/g, "*");
        expression = expression.replace(/÷/g, "/");
        expression = expression.replace(/−/g, "-");

        display.value = eval(expression);

    } catch {

        display.value = "Error";

    }

}


buttons.forEach(button => {

    button.addEventListener("click", () => {

        let value = button.textContent;

        // Clear all
        if (value === "C") {

            display.value = "";

        }

        // Backspace - delete one character
        else if (button.id === "backspace") {

            display.value = display.value.slice(0, -1);

        }

        // Plus / Minus
        else if (value === "+/-") {

            if (display.value !== "") {

                display.value = (parseFloat(display.value) * -1).toString();

            }

        }

        // Percentage
        else if (value === "%") {

            if (display.value !== "") {

                display.value = parseFloat(display.value) / 100;

            }

        }

        // Equal
        else if (value === "=") {

            calculate();

        }

        // Numbers and operators
        else {

            display.value += value;

        }

    });

});


document.addEventListener("keydown", (event) => {

    event.preventDefault();

    const key = event.key;


    // Numbers and decimal point
    if (
        (key >= "0" && key <= "9") ||
        key === "."
    ) {

        display.value += key;

    }


    // Operators
    else if (
        key === "+" ||
        key === "-" ||
        key === "*" ||
        key === "/"
    ) {

        display.value += key;

    }


    // Enter = calculate
    else if (key === "Enter") {

        calculate();

    }


    // Escape = clear
    else if (key === "Escape") {

        display.value = "";

    }

});