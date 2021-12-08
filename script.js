var Hamburger = document.querySelector("#Hamburger");
Hamburger.addEventListener("click", showMenu, false);
 
var flyoutMenu = document.querySelector("#flyoutMenu");
flyoutMenu.addEventListener("click", hideMenu, false);
 
function showMenu(e) {
    flyoutMenu.classList.add("show");
 
    document.body.style.overflow = "hidden";
}
 
function hideMenu(e) {
    flyoutMenu.classList.remove("show");
    e.stopPropagation();
 
    document.body.style.overflow = "auto";
}       