
// Function to take parent element (tab container) and append appropriate elements

const homeTab = function(tabElement) {
    

    // Define all elements required
    const main = document.querySelector(".main");
    const introduction = document.createElement("section");
    const introductionTitle = document.createElement("h1");
    const introductionDescription = document.createElement("article");
    const introductionText = document.createElement("p");


    // Append second and third degree child nodes to relevant parent nodes

    tabElement.appendChild(introduction);
    // tabElement.appendChild(introductionDescription);
    introduction.appendChild(introductionTitle);
    introduction.appendChild(introductionText);



    // Add text content to appropriate elements

    introductionTitle.textContent = "Pizza Fugazzi";
    introductionText.textContent = "Authentic Italian wood oven pizza in the heart of New York City."

    
    // Add class names to elements
    main.classList.add("main--home");
    introduction.classList.add("introduction");
    introductionTitle.classList.add("introduction__title");
    introductionDescription.classList.add("introduction__description");
    introductionText.classList.add("introduction__text");



};


export default homeTab