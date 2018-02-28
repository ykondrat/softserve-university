'use strict';

let a;
let b;
let c;
let result;

do {
    a = parseFloat(prompt('Enter "A":'));
} while (a === 0 || isNaN(a));

do {
    b = parseFloat(prompt('Enter "B":'));
} while (isNaN(b));

do {
    c = parseFloat(prompt('Enter "C":'));
} while (isNaN(c));

result = quadraticEquation(a, b, c);

if (result.length > 1) {
    document.write(`<h3>x1 = ${result[0]}<h3>`);
    document.write(`<h3>x2 = ${result[1]}<h3>`);
} else {
    if (typeof result[0] === 'string') {
        document.write(`<h3>${result[0]}<h3>`);
    } else {
        document.write(`<h3>x = ${result[1]}<h3>`);
    }
}

function quadraticEquation(a, b, c) {
    let d = Math.pow(b, 2) - 4 * a * c;
    let resultsOfX = new Array();

    if (d === 0) {
        resultsOfX.push(-b / (2 * a));
    } else if (d > 0) {
        resultsOfX.push(((-b + Math.sqrt(d)) / (2 * a)));
        resultsOfX.push(((-b - Math.sqrt(d)) / (2 * a)));
    } else {
        resultsOfX.push('If D < 0, the equation ax2 + bx + c = 0 has no solution.');
    }
    return (resultsOfX);
}
