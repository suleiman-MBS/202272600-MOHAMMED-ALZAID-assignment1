// Functionality: Show an alert when the form is submitted
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Stop the page from reloading
    alert("Thank you, Mohammed! Your message has been sent.");
});

console.log("Portfolio loaded successfully.");
