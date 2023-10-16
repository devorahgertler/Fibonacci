const result = document.getElementById("result");
const userInput = document.getElementById("userInput");
const button = document.getElementById('button');

function calculateFibonacci(n) {
    let a = 0, b = 1, c = n;

    for (let i = 2; i <= n; i++) {
        c = a + b;
        a = b;
        b = c;
    }
    result.innerHTML = c;

    if (n < 20) {
        calculateFibonacci(n);
    } else {
        result.innerHTML = "unknown";
    }

};

function respondToUser() {
    calculateFibonacci(userInput.value);
};

button.addEventListener('click', respondToUser);
