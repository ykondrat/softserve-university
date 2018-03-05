const buttons = document.querySelectorAll('.tab-btn');
const allToggle = document.querySelectorAll('.tab-content, .tab-btn');

function buttonsAction(event) {
    let tabNumber = event.target.dataset.tab;

    allToggle.forEach( element => {
        element.dataset.tab === tabNumber ? element.classList.add('active') : element.classList.remove('active');
    });
}

buttons.forEach(element => element.addEventListener('click', buttonsAction));
