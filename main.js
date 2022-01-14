const nav = document.getElementById("nav");
const listas_2 = document.getElementById("listas_2");
const item = document.querySelectorAll(".item");
nav.addEventListener("click", () => {
    nav.classList.toggle("nav_menu_responsive");
    listas_2.classList.toggle("listas2_one");
})