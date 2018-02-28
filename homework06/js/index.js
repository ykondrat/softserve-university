function fibonacci(index) {
    if(index < 0) {
        return (0);
    } else if (index <= 1) {
        return (index);
    } else {
        return (fibonacci(index - 1) + fibonacci(index - 2));
    }
}

let button = document.querySelector('.submit');

button.addEventListener('click', function() {
    let index = parseInt(document.querySelector('.index').value);
    let arr = new Array();
    let resultBlock = document.querySelector('.result');

    for (let i = 0; i < index; i++) {
        arr.push(fibonacci(i));
    }

    arr.forEach(function(element){
        let span = document.createElement('span');
        let textNode = document.createTextNode(`${element}, `);
        span.appendChild(textNode);
        resultBlock.appendChild(span);
    });
}, false);
