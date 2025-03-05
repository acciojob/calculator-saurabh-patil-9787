const display = document.getElementById('input');
const buttons = document.querySelectorAll('button');
const specialChar = ["+", "-", "/", "*"];
let output = '';

const calculate = (btnvalue) => {
    if (btnvalue === "=" && output !== "") {
        try {
            // Check for division by zero
            if (output.includes("/0") || output.includes("/0.") || output === "0/0") {
                output = "NaN";  // 0 / 0 gives NaN
            } else {
                // Evaluate the expression safely
                output = eval(output).toString();
            }
        } catch (error) {
            output = "Error";
        }
    } else if (btnvalue === "C") {
        output = "";
    } else {
        // Prevent starting with an operator
        if (output === "" && specialChar.includes(btnvalue)) return;
        output += btnvalue;
    }
    display.value = output;
};

buttons.forEach((button) => {
    button.addEventListener('click', (event) => calculate(event.target.innerText));
});
