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
const minusBtn = select('.multiply');
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


// onEvent('click', equals, () => {
//     if (input.value != '') {
        
//     }
// })