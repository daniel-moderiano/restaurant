
const initialLoad = function() {
    
    // Define all elements required
    const content = document.querySelector("#content");
    const grid = document.createElement("div");
    const header = document.createElement("header");
    const nav = document.createElement("nav");
    const navBtnGroup = document.createElement("div");
    const navBtns = ["Home", "Menu", "Contact"];
    const main = document.createElement("div");

    // Append first degree child nodes to grid container
    content.appendChild(grid);

    const firstChildren = [header, nav, main, footer];
    firstChildren.forEach(child => grid.appendChild(child));

    // Append second and third degree child nodes to relevant parent nodes
    nav.appendChild(navBtnGroup);

    for(let i = 0; i < 3; i++) {
        const navBtn = document.createElement("button");
        navBtn.classList.add("nav__btn");
        navBtn.textContent = navBtns[i];
        navBtn.id = navBtns[i].toLowerCase();
        navBtnGroup.appendChild(navBtn);
        if (i == 0) {
            navBtn.classList.toggle("nav__btn--selected");
        }
    }
    
    // Add class names to elements
    grid.classList.add("grid");
    header.classList.add("header");
    nav.classList.add("nav");
    navBtnGroup.classList.add("nav__btn-group");
    main.classList.add("main");



};

export default initialLoad
