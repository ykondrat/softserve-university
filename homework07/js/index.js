'use strict';

$(document).ready(() => {
    $('.result').val('0');
    $('button').on('click', event => {
        if (event.currentTarget.dataset.value !== 'AC' && event.currentTarget.dataset.value !== '=' &&
            event.currentTarget.dataset.value !== '(' && event.currentTarget.dataset.value !== ')') {
            let value = event.currentTarget.dataset.value;
            let result = ($('.result').val() === '0' && /\d/.test(value)) ? event.currentTarget.dataset.value : $('.result').val() + event.currentTarget.dataset.value;

            $('.result').val(result);

            !/\d/.test(value) ? findNumbers(value) : null;
        } else if (event.currentTarget.dataset.value === '=') {
            findNumbers('=');
        } else {
            $('.result').val('0');
        }
    });
});

function findNumbers(value) {
    let expression = $('.result').val().split('');
    let numbers = new Array();
    let operator = '';
    let output;

    for (let i = 0, length = expression.length; i < length; i++) {
        let number = '';

        while (/\d/.test(expression[i]) || expression[i] === '.' || (i === 0 && expression[i] === '-')) {
            number += expression[i];
            i++;
        }
        numbers.push(number);
        if (expression[i] && i !== length - 1) {
            operator = expression[i];
        }
    }
    if (numbers.length > 1) {
        output = value === '=' ? calculator(numbers, operator) : (calculator(numbers, operator) + value);
        $('.result').val(output);
    }
}

function calculator(arr, operator) {
    let result;

    switch(operator) {
        case '+':
            result = parseFloat(arr[0]) + parseFloat(arr[1])
            break;
        case '-':
            result = parseFloat(arr[0]) - parseFloat(arr[1])
            break;
        case '*':
            result = parseFloat(arr[0]) * parseFloat(arr[1])
            break;
        case '/':
            result = parseFloat(arr[0]) / parseFloat(arr[1])
            break;
        case '%':
            result = parseFloat(arr[0]) % parseFloat(arr[1])
            break;
    }
    if (!isFinite(result) || isNaN(result)) {
        result = 0;
    }
    return (result);
}
