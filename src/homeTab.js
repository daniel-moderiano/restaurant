
// Function to take parent element (tab container) and append appropriate elements

const homeTab = function(tabElement) {
    

    // Define all elements required
    const main = document.querySelector(".main");
    const introduction = document.createElement("section");
    const introductionTitle = document.createElement("h1");


    // Append second and third degree child nodes to relevant parent nodes

    tabElement.appendChild(introduction);
    introduction.appendChild(introductionTitle);



    // Add text content to appropriate elements

    introductionTitle.textContent = "Pizza Fugazzi";

    
    // Add class names to elements
    main.classList.add("main--home");
    introduction.classList.add("introduction");
    introductionTitle.classList.add("introduction__title");



};


export default homeTab