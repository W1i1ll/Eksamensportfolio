// BurgerMenu
const burgermenu = document.querySelector(".burgermenu");
const navMenu = document.querySelector(".nav-menu");

burgermenu.addEventListener("click", () => {
    burgermenu.classList.toggle("active");
    navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach(link => {
    link.addEventListener("click", () => {
        burgermenu.classList.remove("active");
        navMenu.classList.remove("active");
    });
});