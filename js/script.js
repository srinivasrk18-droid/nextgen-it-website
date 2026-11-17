
// CONTACT FORM FUNCTIONALITY

const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const subject = document.getElementById("subject").value.trim();
        const message = document.getElementById("message").value.trim();

        const response = document.getElementById("response");

        if (!name || !email || !subject || !message) {
            response.textContent = "Please fill in all fields.";
            return;
        }

        response.textContent =
            "Thank you, " + name +
            "! Your message has been received (demo only).";

        contactForm.reset();
    });
}


// HIGHLIGHT CURRENT NAVIGATION PAGE

const currentPage = window.location.pathname.split("/").pop();

document.querySelectorAll("nav a").forEach(function(link) {

    const linkPage = link.getAttribute("href");

    if (linkPage === currentPage ||
        (currentPage === "" && linkPage === "index.html")) {

        link.style.color = "#36b5e8";
        link.style.fontWeight = "bold";
    }

});
