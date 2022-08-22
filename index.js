// Function to perform addition
function add(arguments) {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        sum = sum + arguments[i];
    }
    return sum;
}
// Function to perform subtraction
function sub(arguments) {
    let ans = arguments[0];
    for (let i = 1; i < arguments.length; i++) {
        ans = ans - arguments[i];
    }
    return ans;
    console.log(ans)
}

function mul(arguments) {
    let product = 1;
    for (let i = 0; i < arguments.length; i++) {
        product = product * arguments[i];
    }
    return product;
}

function div(arguments) {
    let rem = arguments[0];
    for (let i = 1; i < arguments.length; i++) {
        rem = rem / arguments[i];
    }
    rem = rem.toFixed(3);
    return rem;
}

function operate(op, num) {
    if (op == '+') {
        return add(num);
    }
    else if (op == '-') {
        return sub(num);
    }
    else if (op == '*') {
        return mul(num);
    }
    else if (op == '/') {
        return div(num);
    }
}

// Functionality for button
let button = document.getElementsByClassName('button');
let display = document.querySelector('#res');
let userInput = []
let num = "";
for (let i = 0; i < button.length; i++) {
    button[i].addEventListener('click', (e) => {
        display.textContent += e.target.value;
        isValidOperator = true;
        num += e.target.value;
        // userInput.push(e.target.value);
    })
}

// Functionality for operator
let operator = document.getElementsByClassName('button-op')
let isValidOperator = true;
let error = document.getElementById('error');

document.addEventListener('keydown', (e) => {
    let re = /[0-9]/;
    let re2 = /[*]/;
    let re3 = /[+-/]/
    if (re.test(e.key)){
        display.textContent += e.key;
        num = display.textContent;
        userInput.push(num);
    }
    if (re2.test(e.key)){
        display.textContent += 'x';
        num = "";
    }
    if (re3.test(e.key)){
        display.textContent += e.key;
        num = "";
    }
})



for (let j = 0; j < operator.length; j++) {
    operator[j].addEventListener('click', (e) => {
        if (isValidOperator) {
            display.textContent += e.target.value;
            if (num !== "") {
                userInput.push(num);
                num = "";
            }
            userInput.push(e.target.value);
        }
        else {
            error.classList.add('alert');
            error.innerHTML = "Cannot insert consecutive operators!";
            setTimeout(() => {
                error.classList.remove("alert");
                error.innerHTML = "";
            }, 2000);
        }
        isValidOperator = false;
    })
}

let clear = document.querySelector('.button-cl');

clear.addEventListener('click', () => {
    display.innerHTML = "";
    userInput = [];
})

let equal = document.querySelector('.button-eq');

equal.addEventListener('click', () => {
    userInput.push(num);
    num = "";
    var total = 0;
    while (userInput.length !== 1) {
        var divIndex = userInput.indexOf("/");
        if (divIndex !== -1) {
            total = operate('/', [userInput[divIndex - 1], userInput[divIndex + 1]])
            userInput[divIndex - 1] = total;
            userInput.splice(divIndex, 2);
        }
        var mulIndex = userInput.indexOf("x");
        if (mulIndex !== -1) {
            total = operate('*', [userInput[mulIndex - 1], userInput[mulIndex + 1]])
            userInput[mulIndex - 1] = total;
            userInput.splice(mulIndex, 2);
        }
        var addIndex = userInput.indexOf("+");
        if (addIndex !== -1) {
            total = operate('+', [parseInt(userInput[addIndex - 1]), parseInt(userInput[addIndex + 1])])
            userInput[addIndex - 1] = total;
            userInput.splice(addIndex, 2);
        }
        var subIndex = userInput.indexOf("-");
        if (subIndex !== -1) {
            total = operate('-', [userInput[subIndex - 1], userInput[subIndex + 1]])
            userInput[subIndex - 1] = total;
            userInput.splice(subIndex, 2);
        }

    }
    display.innerHTML = userInput[0];
})

