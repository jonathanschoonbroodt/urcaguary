// open and close smartphone menu
function openMenu() {
    var element = document.getElementById("menu");
    element.classList.add("-openmenu");
}

function closeMenu() {
    var element = document.getElementById("menu");
    element.classList.remove("-openmenu");
}

function closeMenuAfterClickToAnchor() {
    var element = document.getElementById("menu");
    element.classList.remove("-openmenu");
}
