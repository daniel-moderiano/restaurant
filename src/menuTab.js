
// Function to take parent element (tab container) and append appropriate elements

const menuTab = function(tabElement) {
    

    // Define all elements required
    const menuContainer = document.createElement("section");
    const menuTitle = document.createElement("h2");
    const menuDish = document.createElement("div");
    const menuDishTitle = document.createElement("h3");
    const menuDishText = document.createElement("div");


    // Append second and third degree child nodes to relevant parent nodes

    tabElement.appendChild(menuContainer);
    menuContainer.appendChild(menuTitle);

    // Create four menu entries for dishes

    const dishes = [
        {
            menuEntry: "Margherita",
            description: "Pizza Margherita"
        },
        {
            menuEntry: "Pepperoni",
            description: "Pizza Pepperoni"
        },
        {
            menuEntry: "Vegetarian",
            description: "Pizza Vegeterian"
        },
        {
            menuEntry: "Dessert",
            description: "Pizza Dessert"
        },
    ];


    for (let i = 0; i < 4; i++) {
        let menuDish = document.createElement("div");
        let menuDishTitle = document.createElement("h3");
        let menuDishText = document.createElement("div");
        menuDish.classList.add(`menu__dish`, `menu__dish--${dishes[i].menuEntry.toLowerCase()}`);
        menuDishTitle.classList.add(`menu__name`, `menu__name--${dishes[i].menuEntry.toLowerCase()}`);
        menuDishText.classList.add(`menu__description`, `menu__description--${dishes[i].menuEntry.toLowerCase()}`);
        menuDishText.textContent = dishes[i].description;
        menuDishTitle.textContent = dishes[i].menuEntry; 
        menuContainer.appendChild(menuDish);
        menuDish.appendChild(menuDishTitle);
        menuDish.appendChild(menuDishText);
       
    }



    // Add text content to appropriate elements

    menuTitle.textContent = "Browse our dishes";

    
    // Add class names to elements

    menuContainer.classList.add("menu");
    menuTitle.classList.add("menu__title");

};


export default menuTab