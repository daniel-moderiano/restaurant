
// Function to take parent element (tab container) and append appropriate elements

const menuTab = function(tabElement) {
    

    // Define all elements required
    const main = document.querySelector(".main");
    const menuContainer = document.createElement("section");
    const menuTitle = document.createElement("h2");
    const menuDish = document.createElement("div");
    const menuDishTitle = document.createElement("h3");
    const menuDishText = document.createElement("div");


    // Append second and third degree child nodes to relevant parent nodes

    tabElement.appendChild(menuContainer);
    // menuContainer.appendChild(menuTitle);

    // Create four menu entries for dishes

    const dishes = [
        {
            menuEntry: "Margherita",
            description: "Fresh tomato, bocconcini, mozzarella, garlic & basil",
            price: `Large $25   Small $20`
        },
        {
            menuEntry: "Pepperoni",
            description: "Fresh tomato, cheese and pepperoni",
            price: `Large $26   Small $21`
        },
        {
            menuEntry: "Seafood",
            description: "Tomato, cheese. marinated prawns, squid, anchover, mussels, fish & parsley",
            price: `Large $25   Small $20`
        },
        {
            menuEntry: "Hawaiian",
            description: "Ham, cheese, and tomato with fresh pineapple",
            price: `Large $25   Small $20`
        },
    ];


    for (let i = 0; i < 4; i++) {
        let menuDish = document.createElement("div");
        let menuDishTitle = document.createElement("h3");
        let menuDishText = document.createElement("div");
        let menuDishPrice = document.createElement("div");
        menuDish.classList.add(`menu__dish`, `menu__dish--${dishes[i].menuEntry.toLowerCase()}`);
        menuDishTitle.classList.add(`menu__name`, `menu__name--${dishes[i].menuEntry.toLowerCase()}`);
        menuDishText.classList.add(`menu__description`, `menu__description--${dishes[i].menuEntry.toLowerCase()}`);
        menuDishPrice.classList.add(`menu__price`, `menu__price--${dishes[i].menuEntry.toLowerCase()}`);
        menuDishText.textContent = dishes[i].description;
        menuDishTitle.textContent = dishes[i].menuEntry; 
        menuDishPrice.textContent = dishes[i].price;
        menuContainer.appendChild(menuDish);
        menuDish.appendChild(menuDishTitle);
        menuDish.appendChild(menuDishText);
        menuDish.appendChild(menuDishPrice);
       
    }



    // Add text content to appropriate elements

    menuTitle.textContent = "Menu";

    
    // Add class names to elements
    main.classList.remove("main--home");
    menuContainer.classList.add("menu");
    menuTitle.classList.add("menu__title");

};


export default menuTab