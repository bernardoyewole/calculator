'use strict';

import { onEvent, select, selectAll, create, print } from "./utils.js";

const input = select('input')
const memory = select('.memory');
const reset = select('.reset');
const backspace = select('.backspace');
const operands = selectAll('.operand');
const equalsBtn = select('.equals');
const percentBtn = select('.percent');
const divideBtn = select('.divide');
const multiplyBtn = select('.multiply');
const minusBtn = select('.minus');
const plusBtn = select('.plus');
const period = select('.period');


operands.forEach(operand => {
    onEvent('click', operand, () => {
        input.value += operand.innerText;
    });
});

function isValid(str) {
    if (str.match(/^[0-9.]+$/) && str.value !== '') {
        return true;
    } else {
        return false
    }
}

onEvent('click', reset, () => {
    input.value = '';
    memory.innerText = '';
    operandOne = '';
    operandTwo = '';
    currentOperator = '';
    repeatOperation = false;
});

onEvent('click', backspace, () => {
    let len = input.value.length;
    input.value = input.value.slice(0, len - 1);
});

onEvent('click', percentBtn, () => {
    if (isValid(input.value)) {
        memory.innerText = `${input.value}%`;
        let num = parseFloat(input.value);
        let result = num / 100;
        input.value = result;
    }
})

function divide(a, b) {
    return a / b;
}

function multiply(a, b) {
    return a * b;
}

function add(a, b) {
    return a + b;
}

function minus(a, b) {
    return a - b;
}

let functionsArr = [divide, multiply, add, minus];
let operatorsArr = ['/', '*', '+', '-'];
let currentOperator;
let operandOne;
let operandTwo;

onEvent('click', divideBtn, () => {
    if (isValid(input.value)) {
        repeatOperation = false;
        currentOperator = '/';
        operandOne = parseFloat(input.value);
        input.value = '';
    }
});

onEvent('click', multiplyBtn, () => {
    if (isValid(input.value)) {
        repeatOperation = false;
        currentOperator = '*';
        operandOne = parseFloat(input.value);
        input.value = '';
    }
});

onEvent('click', minusBtn, () => {
    if (isValid(input.value)) {
        repeatOperation = false;
        currentOperator = '-';
        operandOne = parseFloat(input.value);
        input.value = '';
    }
});

onEvent('click', plusBtn, () => {
    if (isValid(input.value)) {
        repeatOperation = false;
        currentOperator = '+';
        operandOne = parseFloat(input.value);
        input.value = '';
    }
});

let repeatOperation = false;

function handleOperations() {
    let index = operatorsArr.indexOf(currentOperator);
    let result = functionsArr[index](operandOne, operandTwo);
    memory.innerText = `${operandOne} ${operatorsArr[index]} ${operandTwo} =`
    input.value = result;
}

onEvent('click', equalsBtn, () => {
    if (repeatOperation) {
        operandOne = parseFloat(input.value);
        handleOperations();
        return;
    }

    if (isValid(input.value)) {
        operandTwo = parseFloat(input.value);
        handleOperations();
        repeatOperation = true;
    }
})