alert("Webpack is running!");

import initialLoad from "./modules/home.js";
import menu from "./modules/menu.js";
import contact from "./modules/contact.js";

function clearContent() {
    const content = document.getElementById("content");
    content.textContent = ""; // Clears content
}

// Event Listeners for Tabs
document.addEventListener("DOMContentLoaded", () => {
    const homeButton = document.getElementById("home-btn");
    const menuButton = document.getElementById("menu-btn");
    const contactButton = document.getElementById("contact-btn");

    homeButton.addEventListener("click", () => {
        clearContent();
        initialLoad();
    });

    menuButton.addEventListener("click", () => {
        clearContent();
        menu();
    });

    contactButton.addEventListener("click", () => {
        clearContent();
        contact();
    });

    // Additional logic for Menu and Contact buttons goes here
    // e.g., similar calls to other modules
});

// Initial load for the home page
initialLoad();
