document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  const nav = document.querySelector("nav");

  hamburger.addEventListener("click", () => {
    nav.classList.toggle("active");
  });

  const typingElement = document.getElementById("typing");
  const words = [
    "Web Developer",
    "Developer",
    "Web Designer",
    "UI/UX Designer",
  ];
  let wordIndex = 0;
  let letterIndex = 0;
  let currentWord = "";
  let currentLetters = "";
  let isDeleting = false;
  function type() {
    if (isDeleting) {
      currentLetters = currentWord.substring(0, letterIndex - 1);
      letterIndex--;
    } else {
      currentLetters = currentWord.substring(0, letterIndex + 1);
      letterIndex++;
    }

    typingElement.innerHTML = currentLetters;

    let typeSpeed = 200;
    if (isDeleting) {
      typeSpeed /= 2;
    }

    if (!isDeleting && letterIndex === currentWord.length) {
      typeSpeed = 2000;
      isDeleting = true;
    } else if (isDeleting && letterIndex === 0) {
      isDeleting = false;
      wordIndex++;
      if (wordIndex === words.length) {
        wordIndex = 0;
      }
      currentWord = words[wordIndex];
      typeSpeed = 500;
    }

    setTimeout(type, typeSpeed);
  }
  currentWord = words[wordIndex];
  type();
});

// // Sample project data
// const projects = [
//   {
//     title: "Personal Website",
//     description: "A responsive website built with HTML, CSS, and JavaScript.",
//     link: "https://example.com/personal-website",
//   },
//   {
//     title: "Todo List App",
//     description: "A simple todo list application with local storage.",
//     link: "https://example.com/todo-app",
//   },
//   {
//     title: "Weather App",
//     description: "Get weather info using open APIs.",
//     link: "https://example.com/weather-app",
//   },
// ];
// // Function to load projects dynamically
// function loadProjects() {
//   const container = document.getElementById("projectsContainer");
//   container.innerHTML = ""; // Clear existing content

//   projects.forEach((project) => {
//     const card = document.createElement("div");
//     card.className = "project-card";

//     const title = document.createElement("h2");
//     title.textContent = project.title;

//     const desc = document.createElement("p");
//     desc.textContent = project.description;

//     const link = document.createElement("a");
//     link.href = project.link;
//     link.target = "_blank";
//     link.textContent = "View Project";

//     card.appendChild(title);
//     card.appendChild(desc);
//     card.appendChild(link);

//     container.appendChild(card);
//   });
// }
// // Handle Load Projects button
// const button = document.getElementById("loadProjectsBtn");

// function closeProjects() {
//   const container = document.getElementById("projectsContainer");
//   container.innerHTML = ""; // Clear existing content
//   button.innerHTML = "Load Projects";
//   // button.removeEventListener("click", loadProjects);
//   // button.addEventListener("click", loadProjects);
// }
// button.addEventListener("click", function () {
//   if (button.innerHTML === "Load Projects") {
//     loadProjects();
//     button.innerHTML = "Hide Projects";
//   } else {
//     closeProjects();
//   }
// });

// // Handle Contact Form Submission
// document.getElementById("contactForm").addEventListener("submit", function (e) {
//   e.preventDefault();
//   const responseMsg = document.getElementById("formResponse");

//   // Simple form validation could be added here
//   const name = document.getElementById("name").value.trim();
//   const email = document.getElementById("email").value.trim();
//   const message = document.getElementById("message").value.trim();

//   if (name && email && message) {
//     responseMsg.textContent = `Thank you, ${name}! Your message has been sent.`;
//     responseMsg.style.color = "green";

//     // Reset form
//     document.getElementById("contactForm").reset();
//   } else {
//     responseMsg.textContent = "Please fill out all fields.";
//     responseMsg.style.color = "red";
//   }
// });
