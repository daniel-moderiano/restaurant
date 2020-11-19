import homePage from "./homePage.js"

homePage();

// Use this file to add appropriate event listeners
const homeBtn = document.querySelector("#home");
const menuBtn = document.querySelector("#menu");
const contactBtn = document.querySelector("#contact");
const content = document.querySelector("#content");


const homeClick = function() {
    if (!content.hasChildNodes()) {
        homePage();
    } else {
        // pass
    }
}

homeBtn.addEventListener("click", homeClick);




console.log('Run success');

