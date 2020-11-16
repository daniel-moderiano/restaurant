
const homePage = function() {
    let header = document.createElement("header");
    let nav = document.createElement("nav");

    const content = document.querySelector("#content");

    content.appendChild(header);
    content.appendChild(nav);

    header.textContent = "Damo's Pizzeria";
}();

export default homePage