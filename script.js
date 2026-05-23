
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

// Hamburger Menu Toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');

    // Check if the menu is open by checking for the active class
    if (navLinks.classList.contains('active')) {
        hamburger.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    } else {
        hamburger.innerHTML = '<i class="fa-solid fa-bars"></i>';
    }
});

// 1. Target the element (Make sure your HTML has class="whatsapp-float")
const whatsappIcon = document.querySelector('.whatsapp-float');

if (!whatsappIcon) {
  // This will tell us immediately if JS can't find your icon
  alert("Error: JavaScript cannot find an element with the class '.whatsapp-float'. Check your HTML!");
} else {
  let isDragging = false;
  let offsetX, offsetY;

  // Unified function to handle down click/touch
  const startDrag = (e) => {
    isDragging = true;
    
    // Get exact cursor/finger position
    const clientX = e.type.startsWith('touch') ? e.touches[0].clientX : e.clientX;
    const clientY = e.type.startsWith('touch') ? e.touches[0].clientY : e.clientY;
    
    const rect = whatsappIcon.getBoundingClientRect();
    offsetX = clientX - rect.left;
    offsetY = clientY - rect.top;
    
    // Visual indicator that drag started
    whatsappIcon.style.opacity = "0.7";
    whatsappIcon.style.transition = "none"; 
  };

  // Unified function to handle moving
  const moveDrag = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    
    const clientX = e.type.startsWith('touch') ? e.touches[0].clientX : e.clientX;
    const clientY = e.type.startsWith('touch') ? e.touches[0].clientY : e.clientY;
    
    // Clear default bottom/right properties so they don't fight the movement
    whatsappIcon.style.right = 'auto';
    whatsappIcon.style.bottom = 'auto';
    
    // Set new positions
    whatsappIcon.style.left = (clientX - offsetX) + 'px';
    whatsappIcon.style.top = (clientY - offsetY) + 'px';
  };

  const stopDrag = () => {
    isDragging = false;
    if(whatsappIcon) whatsappIcon.style.opacity = "1";
  };

  // PC Mouse Listeners
  whatsappIcon.addEventListener('mousedown', startDrag);
  window.addEventListener('mousemove', moveDrag);
  window.addEventListener('mouseup', stopDrag);

  // Mobile Touch Listeners
  whatsappIcon.addEventListener('touchstart', startDrag, { passive: false });
  window.addEventListener('touchmove', moveDrag, { passive: false });
  window.addEventListener('touchend', stopDrag);
}