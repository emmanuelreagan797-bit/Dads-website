
const searchInput = document.getElementById("VehicleSearch");
const cards = document.querySelectorAll(".card");

if (searchInput) {
  searchInput.addEventListener('keyup', function () {
    let filter = searchInput.value.toLowerCase();

    cards.forEach(card => {
      let h3 = card.querySelector('h3');

      if (h3) {
        let title = h3.innerText.toLowerCase();

        if (title.includes(filter)) {
          card.style.display = "";
        } else {
          card.style.display = "none";
        }
      }
    });
  });
}

const darkModeToggle = document.getElementById("dark-mode-toggle");
let themeIcon = null;

if (darkModeToggle) {
    themeIcon = darkModeToggle.querySelector("i");

    darkModeToggle.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");

        if (themeIcon) {
            if (document.body.classList.contains("dark-mode")) {
                themeIcon.classList.replace("fa-moon", "fa-sun");
            } else {
                themeIcon.classList.replace("fa-sun", "fa-moon");
            }
        }

        const isDark = document.body.classList.contains("dark-mode");
        localStorage.setItem("theme", isDark ? "dark" : "light");
    });
}

window.addEventListener("DOMContentLoaded", () => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
        document.body.classList.add("dark-mode");

        if (darkModeToggle) {
            const icon = darkModeToggle.querySelector("i");
            if (icon) icon.classList.replace("fa-moon", "fa-sun");
        }
    }
});