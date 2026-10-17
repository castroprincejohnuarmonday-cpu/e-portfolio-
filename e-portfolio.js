
document.addEventListener("DOMContentLoaded", function () {
    const nav = document.querySelector("nav");

    // Hide navigation links at first
    nav.style.display = "none";

    // Create a button
    const button = document.createElement("button");
    button.textContent = "Show Menu";

    // Insert button before navigation
    nav.parentNode.insertBefore(button, nav);

    // Toggle navigation visibility
    button.addEventListener("click", function () {
        if (nav.style.display === "none") {
            nav.style.display = "block";
            button.textContent = "Hide Menu";
        } else {
            nav.style.display = "none";
            button.textContent = "Show Menu";
        }
    });
});

