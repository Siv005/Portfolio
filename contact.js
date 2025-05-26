document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  const nav = document.querySelector("nav");

  hamburger.addEventListener("click", () => {
    nav.classList.toggle("active");
  });
});

// Handle Contact Form Submission
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const responseMsg = document.getElementById("formResponse");

  // Simple form validation could be added here
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (name && email && message) {
    responseMsg.textContent = `Thank you, ${name}! Your message has been sent.`;
    responseMsg.style.color = "green";

    // Reset form
    document.getElementById("contactForm").reset();
  } else {
    responseMsg.textContent = "Please fill out all fields.";
    responseMsg.style.color = "red";
  }
});
