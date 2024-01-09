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

// // BurgerMenu
// const burgermenu = document.querySelector(".burgermenu");  // Vælg det element, der repræsenterer burgermenuen
// const navMenu = document.querySelector(".nav-menu");  // Vælg det element, der indeholder navigationsmenuen

// burgermenu.addEventListener("click", () => {
//     // Lyt efter klik på burgermenuen og udfør følgende funktion:
//     burgermenu.classList.toggle("active");  // Skift tilstanden (tilføj eller fjern) klassen "active" på burgermenuen
//     navMenu.classList.toggle("active");  // Skift tilstanden (tilføj eller fjern) klassen "active" på navigationsmenuen
// });

// document.querySelectorAll(".nav-link").forEach(link => {
//     // Vælg alle elementer med klassen "nav-link" og udfør følgende funktion for hvert element:
//     link.addEventListener("click", () => {
//         // Lyt efter klik på et navigationslink og udfør følgende funktion:
//         burgermenu.classList.remove("active");  // Fjern klassen "active" fra burgermenuen
//         navMenu.classList.remove("active");  // Fjern klassen "active" fra navigationsmenuen
//     });
// });
