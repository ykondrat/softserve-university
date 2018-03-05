'use strict';

$(document).ready(() => {
    $('button').on('click', event => {
        if (event.currentTarget.dataset.value !== 'AC' && event.currentTarget.dataset.value !== '=') {
            $('.result').val($('.result').val() + event.currentTarget.dataset.value);
        } else if (event.currentTarget.dataset.value === '=') {
            let result = 0;

            try {
                // The best way to solve this problem =)
                // Do not use it !!!
                // eval() is evil of JavaScript
                result = eval($('.result').val())
            } catch (err) {
                $('.result').val(result);
            }
            $('.result').val(result);
        } else {
            $('.result').val('');
        }
    });
});
