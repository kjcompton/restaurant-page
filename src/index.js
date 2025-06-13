import "./styles.css";
import { home } from "./pages/home.js";
import { menu } from "./pages/menu.js";
import { about } from "./pages/about.js";

const content = document.getElementById("content");

let pages = {
    home: home,
    menu: menu,
    about: about,
}

const changeDisplay = function(page) {
    const content = document.getElementById("content");
    content.innerHTML = "";
    const elements = pages[page]();
    content.append(...elements);
};

document.getElementById("home").addEventListener("click", () => {
    changeDisplay("home");
});
document.getElementById("menu").addEventListener("click", () => {
    changeDisplay("menu");
});
document.getElementById("about").addEventListener("click", () => {
    changeDisplay("about");
});

changeDisplay("home");