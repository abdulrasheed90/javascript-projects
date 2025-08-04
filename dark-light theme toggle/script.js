function toggleTheme() {
  document.body.classList.toggle("dark");

  // Save user preference in localStorage
  const isDark = document.body.classList.contains("dark");
  localStorage.setItem("theme", isDark ? "dark" : "light");

  document.getElementById("toggleBtn").textContent = isDark
    ? "Switch to Light Theme"
    : "Switch to Dark Theme";
}

// Apply saved theme on page load
window.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    document.body.classList.add("dark");
    document.getElementById("toggleBtn").textContent = "Switch to Light Theme";
  }
});
