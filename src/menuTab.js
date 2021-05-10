
// Function to take parent element (tab container) and append appropriate elements

const menuTab = function(tabElement) {
    

    // Define all elements required
    const menuContainer = document.createElement("section");
    const menuTitle = document.createElement("h2");
    const menuItem = document.createElement("div");
    const menuDishTitle = document.createElement("h3");
    const menuDishText = document.createElement("div");


    // Append second and third degree child nodes to relevant parent nodes

    tabElement.appendChild(menuContainer);
    menuContainer.appendChild(menuTitle);

    // Create four menu entries for dishes
    for (let i = 0; i < 4; i++) {
        let menuItem = document.createElement("div");
        let menuDishTitle = document.createElement("h3");
        let menuDishText = document.createElement("div");
        menuContainer.appendChild(menuItem);
        menuItem.appendChild(menuDishTitle);
        menuItem.appendChild(menuDishText);
    }



    // Add text content to appropriate elements

    introductionTitle.textContent = "Browse our dishes";
    introductionText.textContent = "Lorem ipsum";

    
    // Add class names to elements

    introduction.classList.add("introduction");
    introductionTitle.classList.add("introduction__title");
    introductionText.classList.add("introduction__text");


};


export default menuTab