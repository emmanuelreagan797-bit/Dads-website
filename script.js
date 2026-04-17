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


const darkModeToggle =document.getElementById('dark-mode-toggle');
const body = document.body;
darkModeToggle.addEventListener('click',() => {
    body.classList.toggle('dark-mode');
})