const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
const projectButton = document.getElementById("projectButton");
const projectMessage = document.getElementById("projectMessage");
const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");
const year = document.getElementById("year");

year.textContent = new Date().getFullYear();

menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Close navigation menu" : "Open navigation menu");
});

document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open navigation menu");
  });
});

projectButton.addEventListener("click", () => {
  projectMessage.textContent =
    "Thanks for exploring my portfolio! More projects and updates will be added as I continue learning.";
});

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const name = document.getElementById("name").value.trim();

  formMessage.textContent = `Thank you, ${name || "there"}! Your message has been received for this demo.`;
  contactForm.reset();
});
