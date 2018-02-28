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

document.write(quadraticEquation(a, b, c));

function quadraticEquation(a, b, c) {
    let d = Math.pow(b, 2) - 4 * a * c;

    if (d === 0) {
        let x = -b / (2 * a);

        return (`<h1>D == 0</h1><h2>Result:</h2><p>x = ${x}</p>`);
    } else if (d > 0) {
        let x1 = (-b + Math.sqrt(d)) / (2 * a);
        let x2 = (-b - Math.sqrt(d)) / (2 * a);

        return (`<h1>D == 0</h1><h2>Result:</h2><p>x1 = ${x1}</p><p>x2 = ${x2}</p>`);
    }
    return ('D < 0, the equation ax2 + bx + c = 0 has no solution.');
}
