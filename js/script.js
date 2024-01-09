// BurgerMenu
// Koden reagerer på klik på burgermenuen og skifter klassen "active" på både burgermenu og navigationsmenu for at vise/skjule menuen.
// Hvis brugeren klikker på et navigationslink, fjernes klassen "active" fra burgermenuen og navigationsmenuen for at lukke menuen.
// Det bruger querySelector til at vælge HTML-elementer med passende klasser.
// Event listeners bruges til at håndtere klik begivenheder og ændre tilstandene på de valgte elementer.
// Samlet set giver koden en simpel interaktion for at åbne/lukke en burgermenu på websiden.

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
