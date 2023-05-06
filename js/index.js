const linksNav = document.querySelector("#linksNav");
const buttonMenu = document.querySelector("#buttonMenu");

buttonMenu.addEventListener("click", mostrarMenu)

let menu = false;
function mostrarMenu () {

    if(menu === false) {
        linksNav.classList.add("visible");
        linksNav.classList.remove("hidden");
        menu = true;
    } else {
        linksNav.classList.add("hidden");
        linksNav.classList.remove("visible");
        menu = false
    }
}