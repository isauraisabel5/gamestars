var Hamburger = document.querySelector("#Hamburger");
Hamburger.addEventListener("click", showMenu, false);
 
Kruis = document.querySelector("#Kruis");
Kruis.addEventListener("click", hideMenu, false);
 
function showMenu(e) {
    flyoutMenu.classList.add("show");
 
    document.body.style.overflow = "hidden";
}
 
function hideMenu(e) {
    flyoutMenu.classList.remove("show");
    e.stopPropagation();
 
    document.body.style.overflow = "auto";
}       

let vesturen = document.getElementById("knop-review")

function sendReviews(){
  location.reload()
}

document.getElementById("knop-review").addEventListener('click', sendReviews);

