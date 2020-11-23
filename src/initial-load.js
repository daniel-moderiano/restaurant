
const initialLoad = function() {
    
    // Define all elements required
    const content = document.querySelector("#content");
    const grid = document.createElement("div");
    const header = document.createElement("header");
    const nav = document.createElement("nav");
    const navBtnGroup = document.createElement("div");
    const navBtns = ["Home", "Menu", "Contact"];
    const main = document.createElement("div");
    const footer = document.createElement("footer");
    const footerCopyright = document.createElement("p");

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
    }

    footer.appendChild(footerCopyright);

    // Add text content to appropriate elements
    header.textContent = "Restaurant";
    footerCopyright.textContent = "Copyright Pizza Time 2020";
    
    // Add class names to elements
    grid.classList.add("grid");
    header.classList.add("header");
    nav.classList.add("nav");
    navBtnGroup.classList.add("nav__btn-group");
    main.classList.add("main");
    footer.classList.add("footer");
    footerCopyright.classList.add("footer__copyright");

};

export default initialLoad
