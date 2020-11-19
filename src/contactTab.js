
// Function to take parent element (tab container) and append appropriate elements

const contactTab = function(tabElement) {
    

    // Define all elements required
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

    introductionTitle.textContent = "Great selection of Pizza";
    introductionText.textContent = "Lorem ipsum dolor sit amet consectetur, adipisicing elit!";

    
    // Add class names to elements

    introduction.classList.add("introduction");
    introductionTitle.classList.add("introduction__title");
    introductionText.classList.add("introduction__text");
    imageContainer.classList.add("image-container");
    image.classList.add("image");

    // Add other necessary attributes to elements
    image.src = "../src/pizza.jpg";
    image.alt = "Delicious pizza";

};


export default contactTab