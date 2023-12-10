'use strict';

import { onEvent, select, selectAll, create, print } from "./utils.js";

const input = select('input')
const operands = selectAll('.operand');
const result = select('.result');
const reset = select('.reset');
const backspace = select('.backspace');

operands.forEach(operand => {
    onEvent('click', operand, () => {
        input.value += operand.innerText;
    });
});

onEvent('click', reset, () => {
    input.value = '';
    result.value = '';
});

onEvent('click', backspace, () => {
    let len = input.value.length;
    input.value = input.value.slice(0, len - 1);
});