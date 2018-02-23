"use strict";

function ready() {
    let headerMenuButton = document.querySelector(".nav-btn-container");

    function toggleButton() {
        headerMenuButton.classList.toggle("close");
    }
    headerMenuButton.addEventListener("click", toggleButton, false);
}

document.addEventListener("DOMContentLoaded", ready);
