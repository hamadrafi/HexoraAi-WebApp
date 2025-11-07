 //Hero Section Spacing
  const navbar = document.querySelector(".navbar");
  const hero = document.querySelector(".hero");

  function adjustHeroSpacing() {
    const navHeight = navbar.offsetHeight;
    if (window.innerWidth <= 991) {
      // Small devices → add some extra space
      hero.style.paddingTop = navHeight + 20 + "px";
    } else {
      // Large screens → just use navbar height
      hero.style.paddingTop = navHeight + "px";
    }
  }

  window.addEventListener("load", adjustHeroSpacing);
  window.addEventListener("resize", adjustHeroSpacing);

// Theme Toggle Functionality
const themeToggle = document.getElementById("themeToggle");
const body = document.body;
const themeIcon = themeToggle.querySelector("i");

// Check saved theme on load
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
  body.classList.add("dark-theme");
  body.classList.remove("light-theme");
  themeIcon.className = "fas fa-sun";
} else {
  body.classList.add("light-theme");
  body.classList.remove("dark-theme");
  themeIcon.className = "fas fa-moon";
}

// Toggle theme on click
themeToggle.addEventListener("click", () => {
  if (body.classList.contains("light-theme")) {
    body.classList.remove("light-theme");
    body.classList.add("dark-theme");
    themeIcon.className = "fas fa-sun";
    localStorage.setItem("theme", "dark");
  } else {
    body.classList.remove("dark-theme");
    body.classList.add("light-theme");
    themeIcon.className = "fas fa-moon";
    localStorage.setItem("theme", "light");
  }
});


// Custom Scroll Animation
function animateOnScroll() {
  const elements = document.querySelectorAll(".animate-on-scroll");

  elements.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (elementTop < windowHeight - 100) {
      if (element.classList.contains("feature-card")) {
        element.style.animation = "fadeIn 0.8s ease forwards";
        element.style.opacity = "1";
        element.style.transform = "translateY(0)";
      } else if (element.classList.contains("stat-item")) {
        element.style.animation = "fadeIn 0.6s ease forwards";
        element.style.opacity = "1";
        element.style.transform = "translateY(0)";

        // Animate counter
        const counter = element.querySelector(".stat-number");
        const target = parseInt(counter.getAttribute("data-count"));
        let current = 0;
        const increment = target / 100;

        const timer = setInterval(() => {
          current += increment;
          if (current >= target) {
            current = target;
            clearInterval(timer);
          }
          counter.textContent = Math.floor(current).toLocaleString();
        }, 20);
      } else if (element.classList.contains("testimonial-card")) {
        element.style.animation = "slideInLeft 0.8s ease forwards";
        element.style.opacity = "1";
        element.style.transform = "translateX(0)";
      }
    }
  });
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Navbar scroll effect
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.style.padding = "0.5rem 0";
    navbar.style.boxShadow = "0 2px 20px rgba(0,0,0,0.1)";
  } else {
    navbar.style.padding = "1rem 0";
    navbar.style.boxShadow = "none";
  }

  animateOnScroll();
});

// Initialize animations on page load
window.addEventListener("load", () => {
  animateOnScroll();
});

// Parallax effect for floating elements
window.addEventListener("scroll", () => {
  const scrolled = window.pageYOffset;
  const parallax = document.querySelectorAll(".floating-element");
  const speed = 0.5;

  parallax.forEach((element) => {
    const yPos = -(scrolled * speed);
    element.style.transform = `translateY(${yPos}px)`;
  });
});

// Add interactive hover effects
document.querySelectorAll(".feature-card").forEach((card) => {
  card.addEventListener("mouseenter", function () {
    this.style.transform = "translateY(-10px) scale(1.02)";
  });

  card.addEventListener("mouseleave", function () {
    this.style.transform = "translateY(0) scale(1)";
  });
});

// Newsletter subscription (demo)
const emailInput = document.querySelector('input[type="email"]');
const subscribeBtn = document.querySelector(".input-group .btn");

subscribeBtn.addEventListener("click", () => {
  if (emailInput.value) {
    subscribeBtn.innerHTML = '<i class="fas fa-check"></i>';
    subscribeBtn.style.background = "#27ae60";
    setTimeout(() => {
      subscribeBtn.innerHTML = '<i class="fas fa-paper-plane"></i>';
      subscribeBtn.style.background = "";
      emailInput.value = "";
    }, 2000);
  }
});
