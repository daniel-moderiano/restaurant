import homeTab from "./homeTab.js"
import contactTab from "./contactTab.js"
import menuTab from "./menuTab.js"
import initialLoad from "./initial-load.js"

// Load up the basic homepage when the site is launched
initialLoad();


// Use this file to add appropriate event listeners

const page = function() {
    const homeBtn = document.querySelector("#home");
    const menuBtn = document.querySelector("#menu");
    const contactBtn = document.querySelector("#contact");
    const content = document.querySelector("#content");
    const tabContent = document.querySelector(".main");

    const btnArr = [homeBtn, menuBtn, contactBtn];

    const toggleBtn = function(btn) {
        btnArr.forEach((btn) => {
            if (btn.classList.contains("nav__btn--selected")) {
                btn.classList.toggle("nav__btn--selected");
            } else {
                // pass
            }
        });
        btn.classList.toggle("nav__btn--selected");
    }

    return {
        homeBtn,
        menuBtn,
        contactBtn,
        content,
        tabContent,
        toggleBtn
    }
}();

contactTab(page.tabContent);

// Add functions that enable tab switching on click of each relevant tab

const homeClick = function(e) {
    if (page.tabContent.hasChildNodes()) {
        while (page.tabContent.firstChild) {
            page.tabContent.removeChild(page.tabContent.lastChild);
        }
        homeTab(page.tabContent);
    } else {
        // pass
    }
    page.toggleBtn(e.target);
}

page.homeBtn.addEventListener("click", homeClick);



const menuClick = function(e) {
    if (page.tabContent.hasChildNodes()) {
        while (page.tabContent.firstChild) {
            page.tabContent.removeChild(page.tabContent.lastChild);
        }
        menuTab(page.tabContent);
    } else {
        // pass
    }
    page.toggleBtn(e.target);
}

page.menuBtn.addEventListener("click", menuClick)



const contactClick = function(e) {
    if (page.tabContent.hasChildNodes()) {
        while (page.tabContent.firstChild) {
            page.tabContent.removeChild(page.tabContent.lastChild);
        }
        contactTab(page.tabContent);
    } else {
        // pass
    }
    page.toggleBtn(e.target);
}

page.contactBtn.addEventListener("click", contactClick)

