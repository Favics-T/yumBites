
  document.addEventListener("DOMContentLoaded", function () {
    const fadeInElements = document.querySelectorAll(".fade-in-section");

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target); // Fade in once
        }
      });
    }, {
      threshold: 0.1, // 10% visible
    });

    fadeInElements.forEach((el) => observer.observe(el));
  });

  console.log('IntersectionObserver' in window);

