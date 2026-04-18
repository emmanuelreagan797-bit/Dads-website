emailjs.init("IfZeseGXd5geL-GnO"); // found in EmailJS Account > API Keys

document.getElementById("contact-form").addEventListener("submit", function(e) {
    e.preventDefault();

    const btn = document.querySelector(".btn");
    btn.textContent = "Sending...";
    btn.disabled = true;

    emailjs.sendForm("service_l4iagd8", "YOUR_TEMPLATE_ID", this)
        .then(() => {
            btn.textContent = "Send";
            btn.disabled = false;
            alert("Message sent successfully!");
            document.getElementById("contact-form").reset();
        })
        .catch((error) => {
            btn.textContent = "Send";
            btn.disabled = false;
            alert("Failed to send message. Please try again.");
            console.error("EmailJS error:", error);
        });
});


document.getElementById('VehicleSearch'). addEventListener('keyup', function () {
let filter =this.value.toLowerCase();
let cards =
document.querySelectorAll('.card');
cards.forEach(card => { 
let title =
card.querySelector('h3').innerText.toLowerCase();
if (title.includes(filter))
{

    card.style.display = "";
    }else{
    card.style.display = "none"; //hide it
}
});  
});


const darkModeToggle = document.getElementById('dark-mode-toggle');
const body = document.body;

// Load dark mode preference from localStorage
if (localStorage.getItem('dark-mode') === 'enabled') {
    body.classList.add('dark-mode');
}

// Only add event listener if toggle exists
if (darkModeToggle) {
    darkModeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        
        // Save preference to localStorage
        if (body.classList.contains('dark-mode')) {
            localStorage.setItem('dark-mode', 'enabled');
        } else {
            localStorage.setItem('dark-mode', 'disabled');
        }
    });
}