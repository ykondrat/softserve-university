'use strict';

const resultBlock = document.querySelector('.result');
const button = document.querySelector('.submit');
const select =document.querySelector('.method');
let method = 'fibonacciRecursive';

function removeChildFromResult() {
    while (resultBlock.firstChild) {
        resultBlock.removeChild(resultBlock.firstChild);
    }
}

function fibonacciIterative(index) {
    let currentResult = 1;
    let prevResult = 1;
    let temp;

    for (let i = 0; i < index - 1; i++) {
		temp = currentResult;
		currentResult = currentResult + prevResult;
		prevResult = temp;
	}
	return (currentResult);
}

function fibonacciRecursive(index) {
    return (index <= 1 ? 1 : (fibonacciRecursive(index - 1) + fibonacciRecursive(index - 2)));
}

function showResult(arrOfResult) {
    arrOfResult.forEach(function(element, index) {
        let span = document.createElement('span');
        let textNode;

        textNode = index !== arrOfResult.length - 1 ? document.createTextNode(`${element}, `) : document.createTextNode(`${element}`);
        span.appendChild(textNode);
        resultBlock.appendChild(span);
    });
}

function showError() {
    let span = document.createElement('span');
    let textNode = document.createTextNode('Bad index');

    span.appendChild(textNode);
    resultBlock.appendChild(span);
}

select.addEventListener('change', function() {
    method = this.value;
});

button.addEventListener('click', function() {
    const index = parseInt(document.querySelector('.index').value);
    let arr = new Array();

    removeChildFromResult();
    if (index >= 0 && !isNaN(index)) {
        if (method === 'fibonacciRecursive') {
            for (let i = 0; i < index; i++) {
                arr.push(fibonacciRecursive(i));
            }
        } else {
            for (let i = 0; i < index; i++) {
                arr.push(fibonacciIterative(i));
            }
        }
        showResult(arr);
    } else {
        showError();
    }
});
