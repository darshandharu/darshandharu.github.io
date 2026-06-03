// Year in footer
document.getElementById("year").textContent = new Date().getFullYear();

// Theme toggle with persistence
const root = document.documentElement;
const toggle = document.getElementById("themeToggle");
const saved = localStorage.getItem("theme");
if (saved === "light") {
  root.setAttribute("data-theme", "light");
  toggle.textContent = "☀️";
}
toggle.addEventListener("click", () => {
  const isLight = root.getAttribute("data-theme") === "light";
  if (isLight) {
    root.removeAttribute("data-theme");
    toggle.textContent = "🌙";
    localStorage.setItem("theme", "dark");
  } else {
    root.setAttribute("data-theme", "light");
    toggle.textContent = "☀️";
    localStorage.setItem("theme", "light");
  }
});
