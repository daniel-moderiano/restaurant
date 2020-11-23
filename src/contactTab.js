
// Function to take parent element (tab container) and append appropriate elements

const contactTab = function(tabElement) {
    

    // Define all elements required
    const contact = document.createElement("div");
    const contactHours = document.createElement("section");
    const contactDetails = document.createElement("section");
    const contactTitleHours = document.createElement("h2");
    const contactTitleDetails = document.createElement("h2");
    const contactWeekdays = document.createElement("div");
    const contactWeekends = document.createElement("div");
    const contactDetailsList = document.createElement("ul");
    const listItems = ["Phone", "Email", "Address"];
    

    // Append second and third degree child nodes to relevant parent nodes

    tabElement.appendChild(contact);
    
    contact.appendChild(contactHours);
    contact.appendChild(contactDetails);
    
    contactHours.appendChild(contactTitleHours);
    contactHours.appendChild(contactWeekdays);
    contactHours.appendChild(contactWeekends);
    contactDetails.appendChild(contactTitleDetails);
    contactDetails.appendChild(contactDetailsList);
    
    listItems.forEach(item => {
        const listItem = document.createElement("li");
        listItem.classList.add("contact__list-item", `contact__${item.toLowerCase()}`);    
        listItem.id = item.toLowerCase();
        contactDetailsList.appendChild(listItem);
    });


    // Add text content to appropriate elements

    contactTitleHours.textContent = "Opening hours";
    contactTitleDetails.textContent = "Contact Us!";
    contactWeekdays.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi vel, tempora doloribus itaque, dignissimos sequi accusantium placeat id at natus dolorum eveniet ducimus corrupti, dolores quas reiciendis voluptates animi iste.";
    contactWeekends.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi vel, tempora doloribus itaque, dignissimos sequi accusantium placeat id at natus dolorum eveniet ducimus corrupti, dolores quas reiciendis voluptates animi iste.";
    const contactPhone = document.querySelector(".contact__phone");
    contactPhone.textContent = "08 8288 8828";
    const contactEmail = document.querySelector(".contact__email");
    contactEmail.textContent = "pizzatime@internode.com";
    const contactAddress = document.querySelector(".contact__address");
    contactAddress.textContent = "121 Central Street, New York";



    // Add class names to elements

    contact.classList.add("contact");
    contactHours.classList.add("contact__hours");
    contactDetails.classList.add("contact__details");
    contactTitleHours.classList.add("contact__title-hours");
    contactTitleDetails.classList.add("contact__title-details");
    contactWeekdays.classList.add("contact__weekdays");
    contactWeekends.classList.add("contact__weekends");
    contactDetailsList.classList.add("contact__details-list");

};


export default contactTab