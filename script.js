
// Contact Form Submission
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    const name = contactForm[0].value;
    const email = contactForm[1].value;
    const message = contactForm[2].value;

    // Basic validation
    if (name === "" || email === "" || message === "") {
        alert("Please fill in all fields.");
        return;
    }

    // Example of what to do with the form data (send it to a server, etc.)
    console.log("Form submitted:");
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);

    // Clear the form
    contactForm.reset();
    alert("Thank you for your message! I'll get back to you soon.");
});

// Initialize EmailJS
(function () {
    emailjs.init("OHUF5fltLZx3t96da"); // Replace with your EmailJS user ID
})();

document.getElementById("contact-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default form submission

    // Get form values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Create a template parameter object
    const templateParams = {
        name: name,
        email: email,
        message: message,
    };

    // Send email
    emailjs.send("service_e2eryc8", "template_pb09pvq", templateParams)
        .then(function (response) {
            console.log("Message sent successfully!", response.status, response.text);
            alert("Message sent successfully!");
            // Clear the form
            document.getElementById("contact-form").reset();
        }, function (error) {
            console.error("Failed to send message:", error);
            alert("Failed to send message. Please try again later.");
        });
});

