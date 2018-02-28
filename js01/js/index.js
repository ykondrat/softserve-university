
function sum(a, b) {
    if (arguments[2]) {
        return (a + b + arguments[2]);
    } else {
        return (a + b);
    }

}

console.log(sum(5, 5));
console.log(sum(5, 15, 30));
console.log(sum(5, 5, 30, 30));
