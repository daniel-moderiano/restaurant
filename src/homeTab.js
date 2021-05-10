
// Function to take parent element (tab container) and append appropriate elements

const homeTab = function(tabElement) {
    

    // Define all elements required
    const main = document.querySelector(".main");
    const introduction = document.createElement("section");
    const introductionTitle = document.createElement("h2");
    const introductionText = document.createElement("article");
    const imageContainer = document.createElement("aside");
    const image = document.createElement("img");

    // Append second and third degree child nodes to relevant parent nodes

    tabElement.appendChild(introduction);
    tabElement.appendChild(imageContainer);
    introduction.appendChild(introductionTitle);
    introduction.appendChild(introductionText);
    imageContainer.appendChild(image);


    // Add text content to appropriate elements

    introductionTitle.textContent = "Pizza Fugazzi";
    introductionText.textContent = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos mollitia facere, laudantium illo eligendi nemo earum nulla exercitationem magni quam obcaecati corporis iusto officia reprehenderit quia, itaque molestiae atque ipsam!";

    
    // Add class names to elements
    main.classList.add("main--home");
    introduction.classList.add("introduction");
    introductionTitle.classList.add("introduction__title");
    introductionText.classList.add("introduction__text");
    imageContainer.classList.add("image-container");
    image.classList.add("image");

    // Add other necessary attributes to elements
    image.src = "../src/pizza1.jpg";
    image.alt = "Delicious pizza";

};


export default homeTab