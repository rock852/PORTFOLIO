// Handle contact form submission
const contactForm = document.getElementById("contact-form");
const formMessage = document.getElementById("form-message");

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  if (name && email && message) {
    formMessage.textContent = "Thank you for reaching out! I'll respond shortly.";
    formMessage.style.color = "green";
    contactForm.reset();
  } else {
    formMessage.textContent = "Please fill out all the fields.";
    formMessage.style.color = "red";
  }
});
