import "./styles.css";
import { home } from "./home.js";
import { menu } from "./menu.js";
import { about } from "./about.js";

const content = document.getElementById("content");


function changeDisplay(e) {
    content.innerHTML = "";
    if (e.target.id === "home") {
        home();
    }
    else if (e.target.id === "menu") {
        menu();
    }
    else if (e.target.id === "about") {
        about();
    }
}

const header = document.querySelector("header");
header.addEventListener("click", changeDisplay)

home();