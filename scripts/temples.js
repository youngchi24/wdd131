// Select the hamburger button and navigation menu
const menuButton = document.querySelector("#menu");
const navigation = document.querySelector("#primary-navigation");

// Toggle the mobile navigation menu
menuButton.addEventListener("click", () => {

    const isOpen = navigation.classList.toggle("open");

    menuButton.classList.toggle("open", isOpen);

    menuButton.setAttribute("aria-expanded", isOpen);

    menuButton.setAttribute(
        "aria-label",
        isOpen ? "Close navigation menu" : "Open navigation menu"
    );

});

// Close the menu after clicking a navigation link
navigation.querySelectorAll("a").forEach(link => {

    link.addEventListener("click", () => {

        navigation.classList.remove("open");
        menuButton.classList.remove("open");

        menuButton.setAttribute("aria-expanded", "false");
        menuButton.setAttribute("aria-label", "Open navigation menu");

    });

});

// Display the current year
document.querySelector("#currentyear").textContent =
    new Date().getFullYear();

// Display the last modified date
document.querySelector("#lastModified").textContent =
    `Last Modified: ${document.lastModified}`;