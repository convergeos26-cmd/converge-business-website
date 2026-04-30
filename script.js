const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});

const form = document.getElementById("contactForm");
const message = document.getElementById("formMessage");

form.addEventListener("submit", async function (e) {
  e.preventDefault();

  message.textContent = "Submitting...";

  const formData = new FormData(form);

  try {
    const response = await fetch("https://formspree.io/f/xzdopdyz", {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json"
      }
    });

    if (response.ok) {
      message.textContent = "✅ Audit request submitted successfully!";
      form.reset();
    } else {
      message.textContent = "❌ Submission failed. Please try again.";
    }
  } catch (error) {
    message.textContent = "❌ Network error. Please try again.";
  }
});
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, {
  threshold: 0.1
});

document.querySelectorAll(".fade-in").forEach((el) => {
  observer.observe(el);
});