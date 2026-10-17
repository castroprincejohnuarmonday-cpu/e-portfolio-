
document.addEventListener("DOMContentLoaded", function () {

    const sections = document.querySelectorAll("main section");
    const navLinks = document.querySelectorAll("nav a");

    // Hide all sections initially
    sections.forEach(function (section) {
        section.style.display = "none";
    });

    // Show the section when its anchor is clicked
    navLinks.forEach(function (link) {
        link.addEventListener("click", function (event) {
            event.preventDefault();

            const targetId = link.getAttribute("href");
            const targetSection = document.querySelector(targetId);

            // Hide all sections
            sections.forEach(function (section) {
                section.style.display = "none";
            });

            // Show only the selected section
            if (targetSection) {
                targetSection.style.display = "block";
            }
        });
    });

});
