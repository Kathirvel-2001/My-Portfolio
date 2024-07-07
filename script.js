function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
const texts = ["Backend Developer", "Java Developer", "Sql Developer", "Frontend Developer"];
let index = 0;

function changeText() {
    const span = document.querySelector('.section__text__p2 span');
    span.style.opacity = 0; // Reset the opacity for the fade effect
    setTimeout(() => {
        span.textContent = texts[index];
        span.style.opacity = 1;
        index = (index + 1) % texts.length;
    }, 500); // Timeout matches the CSS animation duration for smooth transition
}

setInterval(changeText, 2000);