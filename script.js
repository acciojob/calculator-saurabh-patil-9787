const display = document.getElementById('input');
const buttons = document.querySelectorAll('button');
let currentInput = '';

// Function to update the display
const updateDisplay = (value) => {
    display.value = value;
};

// Function to handle calculations
const calculate = () => {
    try {
        let result = eval(currentInput);
        
        // Handling division by zero and invalid operations
        if (result === Infinity || result === -Infinity) {
            result = "Infinity";
        }
        if (isNaN(result)) {
            result = "NaN";
        }

        // Display the result
        currentInput = result.toString();
        updateDisplay(currentInput);
    } catch (error) {
        currentInput = "Error";
        updateDisplay(currentInput);
    }
};

// Handle button clicks
buttons.forEach(button => {
    button.addEventListener('click', (event) => {
        const buttonText = event.target.innerText;

        if (buttonText === "C") {
            // Clear button logic
            currentInput = '';
            updateDisplay('0');
        } else if (buttonText === "=") {
            // Equals button logic
            calculate();
        } else {
            // Handle all other buttons
            if (currentInput === '0' || currentInput === "Error" || currentInput === "Infinity" || currentInput === "NaN") {
                currentInput = ''; // Clear invalid or previous result
            }
            currentInput += buttonText;
            updateDisplay(currentInput);
        }
    });
});
