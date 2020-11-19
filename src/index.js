import homeTab from "./homeTab.js"
import initialLoad from "./initial-load.js"

initialLoad();

// Use this file to add appropriate event listeners

const page = function() {
    const homeBtn = document.querySelector("#home");
    const menuBtn = document.querySelector("#menu");
    const contactBtn = document.querySelector("#contact");
    const content = document.querySelector("#content");
    const tabContent = document.querySelector(".main");

    return {
        homeBtn,
        menuBtn,
        contactBtn,
        content,
        tabContent
    }
}();


homeTab(page.tabContent);


const homeClick = function() {
    if (!page.tabContent.hasChildNodes()) {
        homeTab(page.tabContent);
    } else {
        // pass
    }
}

page.homeBtn.addEventListener("click", homeClick);


const menuClick = function() {
    if (page.tabContent.hasChildNodes()) {
        while (page.tabContent.firstChild) {
            page.tabContent.removeChild(page.tabContent.lastChild);
        }
    } else {
        // pass
    }
}

page.menuBtn.addEventListener("click", menuClick)

