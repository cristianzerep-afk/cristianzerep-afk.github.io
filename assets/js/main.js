document.documentElement.classList.add("js-enabled");

const year = document.getElementById("year");
if (year) year.textContent = new Date().getFullYear();

const menuButton = document.querySelector(".menu-toggle");
const menuLabel = menuButton.querySelector(".menu-label");
const navigation = document.getElementById("primary-nav");
const navigationLinks = [...navigation.querySelectorAll('a[href^="#"]')];
const sections = navigationLinks
  .map((link) => document.querySelector(link.getAttribute("href")))
  .filter(Boolean);

function setMenuOpen(isOpen) {
  navigation.classList.toggle("is-open", isOpen);
  menuButton.setAttribute("aria-expanded", String(isOpen));
  menuLabel.textContent = isOpen ? "Close" : "Menu";
}

menuButton.addEventListener("click", () => {
  setMenuOpen(menuButton.getAttribute("aria-expanded") !== "true");
});

navigation.addEventListener("click", (event) => {
  if (event.target.closest("a")) {
    setMenuOpen(false);
  }
});

document.querySelector(".brand").addEventListener("click", () => {
  setMenuOpen(false);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && navigation.classList.contains("is-open")) {
    setMenuOpen(false);
    menuButton.focus();
  }
});

document.addEventListener("click", (event) => {
  if (!event.target.closest(".header-inner")) {
    setMenuOpen(false);
  }
});

window.matchMedia("(min-width: 801px)").addEventListener("change", (event) => {
  if (event.matches) {
    setMenuOpen(false);
  }
});

let scrollUpdatePending = false;

function updateActiveLink() {
  const marker = document.querySelector(".site-header").offsetHeight + 55;
  let currentId = "home";

  sections.forEach((section) => {
    if (section.getBoundingClientRect().top <= marker) {
      currentId = section.id;
    }
  });

  navigationLinks.forEach((link) => {
    if (link.getAttribute("href") === `#${currentId}`) {
      link.setAttribute("aria-current", "location");
    } else {
      link.removeAttribute("aria-current");
    }
  });

  scrollUpdatePending = false;
}

function queueActiveLinkUpdate() {
  if (!scrollUpdatePending) {
    scrollUpdatePending = true;
    window.requestAnimationFrame(updateActiveLink);
  }
}

window.addEventListener("scroll", queueActiveLinkUpdate, { passive: true });
window.addEventListener("resize", queueActiveLinkUpdate);
window.addEventListener("hashchange", queueActiveLinkUpdate);
queueActiveLinkUpdate();

const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

if ("IntersectionObserver" in window && !prefersReducedMotion.matches) {
  const revealElements = document.querySelectorAll(".reveal");
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.08 }
  );

  revealElements.forEach((element) => revealObserver.observe(element));
  document.documentElement.classList.add("has-motion");
}

const themeButton = document.querySelector(".theme-toggle");
let savedTheme = null;
try {
  savedTheme = localStorage.getItem("portfolio-theme");
} catch {
  // Theme still works for the current page when browser storage is unavailable.
}
if (savedTheme === "light") document.documentElement.dataset.theme = "light";
if (themeButton) {
  function updateThemeButton() {
    const isLight = document.documentElement.dataset.theme === "light";
    themeButton.setAttribute("aria-label", isLight ? "Switch to dark theme" : "Switch to light theme");
    themeButton.title = isLight ? "Switch to dark theme" : "Switch to light theme";
    themeButton.textContent = isLight ? "Dark" : "Light";
  }
  updateThemeButton();
  themeButton.addEventListener("click", () => {
    const isLight = document.documentElement.dataset.theme !== "light";
    document.documentElement.dataset.theme = isLight ? "light" : "dark";
    try {
      localStorage.setItem("portfolio-theme", isLight ? "light" : "dark");
    } catch {
      // Leave the selected theme active for this page view.
    }
    updateThemeButton();
  });
}
