// Function to perform addition
function add() {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        sum = sum + arguments[i];
    }
    return sum;
}
// Function to perform subtraction
function sub() {
    let ans = arguments[0];
    for (let i = 1; i < arguments.length; i++) {
        ans = ans - arguments[i];
    }
    return ans;
    console.log(ans)
}

function mul() {
    let product = 1;
    for (let i = 0; i < arguments.length; i++) {
        product = product * arguments[i];
    }
    return product;
}

function div() {
    let rem = arguments[0];
    for (let i = 1; i < arguments.length; i++) {
        rem = rem / arguments[i];
    }
    rem = rem.toFixed(3);
    return rem;
}

function operate(num1, num2, op) {
    if (op == '+') {
        return add(num1, num2);
    }
    else if (op == '-') {
        return sub(num1, num2);
    }
    else if (op == '*') {
        return mul(num1, num2);
    }
    else if (op == '/') {
        return div(num1, num2);
    }
}

// Functionality for button
let button = document.getElementsByClassName('button');
let display = document.querySelector('#res');

for (let i = 0 ; i < button.length ; i++)
{
    button[i].addEventListener('click', (e) => {
        display.textContent += e.target.value;
    })
}


