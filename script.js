const display = document.getElementById('input');
const buttons = document.querySelectorAll('button');
const specialChar = ["+", "-", "/", "*"];
let output = '';

// Helper function to handle calculations and edge cases
const calculate = (btnvalue) => {
    if (btnvalue === "=" && output !== "") {
        try {
            // Prevent evaluation if output has consecutive operators or invalid input
            if (output.includes("++") || output.includes("--") || output.includes("**") || output.includes("//")) {
                output = "Error";
            } else if (output.includes("/0") || output === "0/0") {
                output = "Infinity"; // Handle division by zero
            } else {
                // Safely evaluate the expression
                output = eval(output).toString();

                // Handle NaN cases
                if (output === 'NaN') {
                    output = 'NaN';
                }
            }
        } catch (error) {
            output = "Error"; // Handle any errors in eval
        }
    } else if (btnvalue === "C") {
        output = ""; // Clear the display when 'C' is clicked
    } else {
        // Prevent starting an expression with an operator
        if (output === "" && specialChar.includes(btnvalue)) return;

        // Prevent multiple decimals in a number
        if (btnvalue === '.' && output.includes('.')) return;

        output += btnvalue; // Append the button's value to the expression
    }

    // Update the input field with the output
    display.value = output;
};

// Add event listeners to each button
buttons.forEach((button) => {
    button.addEventListener('click', (event) => {
        calculate(event.target.innerText);
    });
});
