
window.addEventListener("load", function () {
    const nav = document.querySelector("header nav");
    const sections = document.querySelectorAll("main section");

    if (!nav) {
        alert("Navigation not found!");
        return;
    }

    // Hide all sections
    sections.forEach(function (section) {
        section.hidden = true;
    });

    // Hide navigation
    nav.hidden = true;

    // Create menu button
    const button = document.createElement("button");
    button.textContent = "Show Menu";
    nav.before(button);

    button.addEventListener("click", function () {
        nav.hidden = !nav.hidden;
        button.textContent = nav.hidden ? "Show Menu" : "Hide Menu";
    });

    // Display only the selected section
    nav.querySelectorAll("a").forEach(function (link) {
        link.addEventListener("click", function (event) {
            event.preventDefault();

            const targetId = link.getAttribute("href").slice(1);

            sections.forEach(function (section) {
                section.hidden = section.id !== targetId;
            });

            nav.hidden = true;
            button.textContent = "Show Menu";

            window.location.hash = targetId;
        });
    });
});
