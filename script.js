
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



const whatsappIcon = document.querySelector('.whatsapp-float');

// CRITICAL FIX: Everything only runs IF the icon exists on the current page
if (whatsappIcon) {
  let isDragging = false;
  let startX, startY;

  const getCoords = (e) => {
    if (e.type.startsWith('touch')) {
      return {
        x: e.touches[0] ? e.touches[0].clientX : e.changedTouches[0].clientX,
        y: e.touches[0] ? e.touches[0].clientY : e.changedTouches[0].clientY
      };
    }
    return { x: e.clientX, y: e.clientY };
  };

  const dragStart = (e) => {
    isDragging = true;
    
    const coords = getCoords(e);
    const rect = whatsappIcon.getBoundingClientRect();
    startX = coords.x - rect.left;
    startY = coords.y - rect.top;
    
    whatsappIcon.style.transition = 'none'; 
  };

  const dragMove = (e) => {
    if (!isDragging) return;
    e.preventDefault(); 
    
    const coords = getCoords(e);
    let newX = coords.x - startX;
    let newY = coords.y - startY;
    
    const padding = 15;
    const iconWidth = whatsappIcon.offsetWidth;
    const iconHeight = whatsappIcon.offsetHeight;
    
    newX = Math.max(padding, Math.min(newX, window.innerWidth - iconWidth - padding));
    newY = Math.max(padding, Math.min(newY, window.innerHeight - iconHeight - padding));
    
    whatsappIcon.style.right = 'auto';
    whatsappIcon.style.bottom = 'auto';
    whatsappIcon.style.left = `${newX}px`;
    whatsappIcon.style.top = `${newY}px`;
  };

  const dragEnd = () => {
    isDragging = false;
  };

  // PC Desktop Listeners
  whatsappIcon.addEventListener('mousedown', dragStart);
  window.addEventListener('mousemove', dragMove);
  window.addEventListener('mouseup', dragEnd);

  // Mobile Phone Listeners
  whatsappIcon.addEventListener('touchstart', dragStart, { passive: false });
  window.addEventListener('touchmove', dragMove, { passive: false });
  window.addEventListener('touchend', dragEnd);
  
  console.log("WhatsApp draggable features loaded successfully on this page!");
} else {
  // Safe fallback message for your other pages
  console.log("No WhatsApp icon found on this page. Draggable script skipped safely.");
}