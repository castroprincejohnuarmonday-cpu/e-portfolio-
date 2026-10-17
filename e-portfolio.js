
document.addEventListener("DOMContentLoaded", function () {
    const nav = document.querySelector("nav");
    const sections = document.querySelectorAll("main section");

    // Hide all sections initially
    sections.forEach(function (section) {
        section.style.display = "none";
    });

    // Create menu toggle button
    const button = document.createElement("button");
    button.textContent = "Show Menu";
    nav.parentNode.insertBefore(button, nav);

    // Hide navigation initially
    nav.style.display = "none";

    // Toggle menu visibility
    button.addEventListener("click", function () {
        if (nav.style.display === "none") {
            nav.style.display = "block";
            button.textContent = "Hide Menu";
        } else {
            nav.style.display = "none";
            button.textContent = "Show Menu";
        }
    });

    // Show only the selected section
    nav.querySelectorAll("a").forEach(function (link) {
        link.addEventListener("click", function () {
            const targetId = link.getAttribute("href").substring(1);

            sections.forEach(function (section) {
                section.style.display =
                    section.id === targetId ? "block" : "none";
            });

            nav.style.display = "none";
            button.textContent = "Show Menu";
        });
    });
});


