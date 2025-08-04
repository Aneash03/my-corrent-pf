// Theme Toggle
document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("toggle-theme");
  if (button) {
    button.addEventListener("click", () => {
      document.body.classList.toggle("dark");
    });
  }

  const form = document.getElementById("contact-form");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Message sent! Thanks for contacting.");
      form.reset();
    });
  }
});
