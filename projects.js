document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  const nav = document.querySelector("nav");

  hamburger.addEventListener("click", () => {
    nav.classList.toggle("active");
  });
});

// Sample project data
const projects = [
  {
    title: "My-Portfolio",
    description:
      "A responsive  portfolio website built with HTML, CSS, and JavaScript.using Flexbox and Grid for layout and displays my skills, projects, and contact information.",
    link: "https://my-portfolio-bot.netlify.app",
  },
  {
    title: "E-commerce website",
    description:
      "Built an e-commerce website using HTML, CSS, and JavaScript with a focus on responsive design and user experience,with features like product listings,collections and login functionality with local storage.",
    link: "https://jostra.netlify.app",
  },
  {
    title: "Weather App",
    description:
      "Built a weather app using HTML,CSS and Javascript.Using OpenWeatherMap API to fetch weather data and display it in a user-friendly interface.",
    link: "https://weather-finder-bot.netlify.app",
  },
  {
    title: "Movie-Search-Engine",
    description:
      "Built a movie search engine using ReactJS. It allows users to search for movies and view details using the OMDB API.",
    link: "https://movie-tracker-bot.netlify.app",
  },
  {
    title: "Recipe-app",
    description:
      "Built a recipe app using HTML,CSS and Javascript. It allows users to search for recipe and view details using the food meal API that provides a wide range of recipes for various cuisines from around the world.",
    link: "https://arban-dabha.netlify.app",
  },
  {
    title: "calculator",
    description:
      "Built a calculator using HTML,CSS and Javascript. It allows users to perform basic arithmetic operations like addition, subtraction, multiplication, and division.",
    link: "https://math-lover.netlify.app",
  },
  {
    title: "Notes-App",
    description:
      "Built a notes app using HTML,css and Javascript. It allows users to create, edit, and delete notes with local storage functionality to save notes.",
    link: "https://daily-notes-saver.netlify.app",
  },
];
// Function to load projects dynamically
function loadProjects() {
  const container = document.getElementById("projectsContainer");
  container.innerHTML = ""; // Clear existing content

  projects.forEach((project) => {
    const card = document.createElement("div");
    card.className = "project-card";

    const title = document.createElement("h2");
    title.textContent = project.title;

    const desc = document.createElement("p");
    desc.textContent = project.description;

    const link = document.createElement("a");
    link.href = project.link;
    link.target = "_blank";
    link.textContent = "View Project";

    card.appendChild(title);
    card.appendChild(desc);
    card.appendChild(link);

    container.appendChild(card);
  });
}
// Handle Load Projects button
// document
//   .getElementById("loadProjectsBtn")
//   .addEventListener("click", loadProjects);

const button = document.getElementById("loadProjectsBtn");

function closeProjects() {
  const container = document.getElementById("projectsContainer");
  container.innerHTML = ""; // Clear existing content
  button.innerHTML = "Load Projects";
  // button.removeEventListener("click", loadProjects);
  // button.addEventListener("click", loadProjects);
}
button.addEventListener("click", function () {
  if (button.innerHTML === "Load Projects") {
    loadProjects();
    button.innerHTML = "Hide Projects";
  } else {
    closeProjects();
  }
});
