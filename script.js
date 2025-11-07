//Hero Section Spacing
const navbar = document.querySelector(".navbar");
const hero = document.querySelector(".hero");

function adjustHeroSpacing() {
  const navHeight = navbar.offsetHeight;
  if (window.innerWidth <= 991) {
    hero.style.paddingTop = navHeight + 20 + "px";
  } else {
    hero.style.paddingTop = navHeight + "px";
  }
}

window.addEventListener("load", adjustHeroSpacing);
window.addEventListener("resize", adjustHeroSpacing);

// Theme Toggle Functionality
const themeToggle = document.getElementById("themeToggle");
const body = document.body;
const themeIcon = themeToggle.querySelector("i");
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
  body.classList.add("dark-theme");
  themeIcon.className = "fas fa-sun";
} else {
  body.classList.add("light-theme");
  themeIcon.className = "fas fa-moon";
}

themeToggle.addEventListener("click", () => {
  if (body.classList.contains("light-theme")) {
    body.classList.replace("light-theme", "dark-theme");
    themeIcon.className = "fas fa-sun";
    localStorage.setItem("theme", "dark");
  } else {
    body.classList.replace("dark-theme", "light-theme");
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
      element.style.opacity = "1";
      element.style.transform = "translateY(0)";

      if (element.classList.contains("feature-card")) {
        element.style.animation = "fadeIn 0.8s ease forwards";
      }

      // ✅ Improved Counter Animation (No Overlap + Slower + Runs Once)
      if (element.classList.contains("stat-item")) {
        const counter = element.querySelector(".stat-number");

        if (!counter.dataset.done) {
          const target = parseInt(counter.getAttribute("data-count"));
          let current = 0;
          const increment = target / 400; // slower

          const timer = setInterval(() => {
            current += increment;

            if (current >= target) {
              current = target;
              clearInterval(timer);
            }

            counter.textContent = Math.floor(current).toLocaleString();
          }, 30); // slower update speed

          counter.dataset.done = "true"; // prevents rerun
        }
      }

      if (element.classList.contains("testimonial-card")) {
        element.style.animation = "slideInLeft 0.8s ease forwards";
      }
    }
  });
}

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
});

// Navbar Scroll Effect
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

// Run on load
window.addEventListener("load", () => {
  animateOnScroll();
});

// Parallax Elements
window.addEventListener("scroll", () => {
  const scrolled = window.pageYOffset;
  document.querySelectorAll(".floating-element").forEach((element) => {
    element.style.transform = `translateY(${-scrolled * 0.5}px)`;
  });
});

// Feature Card Hover
document.querySelectorAll(".feature-card").forEach((card) => {
  card.addEventListener("mouseenter", function () {
    this.style.transform = "translateY(-10px) scale(1.02)";
  });
  card.addEventListener("mouseleave", function () {
    this.style.transform = "translateY(0) scale(1)";
  });
});

// Newsletter Demo
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
