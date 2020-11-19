
const homePage = function() {
    
    // Define all elements required
    const content = document.querySelector("#content");
    const grid = document.createElement("div");
    const header = document.createElement("header");
    const nav = document.createElement("nav");
    const navBtnGroup = document.createElement("div");
    const navBtns = ["Home", "Menu", "Contact"];
    const introduction = document.createElement("section");
    const introductionTitle = document.createElement("h2");
    const introductionText = document.createElement("article");
    const imageContainer = document.createElement("aside");
    const image = document.createElement("img");
    const footer = document.createElement("footer");
    const footerCopyright = document.createElement("p");

    // Append first degree child nodes to grid container
    content.appendChild(grid);

    const firstChildren = [header, nav, introduction, imageContainer, footer];
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

    introduction.appendChild(introductionTitle);
    introduction.appendChild(introductionText);
    imageContainer.appendChild(image);
    footer.appendChild(footerCopyright);

    // Add text content to appropriate elements
    header.textContent = "Damo's Pizzeria";
    introductionTitle.textContent = "The best pizza in Adelaide!";
    introductionText.textContent = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos mollitia facere, laudantium illo eligendi nemo earum nulla exercitationem magni quam obcaecati corporis iusto officia reprehenderit quia, itaque molestiae atque ipsam!";
    footerCopyright.textContent = "Copyright Damo 2020";
    
    // Add class names to elements
    grid.classList.add("grid");
    header.classList.add("header");
    nav.classList.add("nav");
    navBtnGroup.classList.add("nav__btn-group");
    introduction.classList.add("introduction");
    introductionTitle.classList.add("introduction__title");
    introductionText.classList.add("introduction__text");
    imageContainer.classList.add("image-container");
    image.classList.add("image");
    footer.classList.add("footer");
    footerCopyright.classList.add("footer__copyright");

    // Add other necessary attributes to elements
    image.src = "../src/pizza.jpg";
    image.alt = "Delicious pizza";

};


export default homePage