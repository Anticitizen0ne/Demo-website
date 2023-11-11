const hamburger = document.querySelector(".hamburger")
const navMenu = document.querySelector(".nav-menu")

hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("active")
    hamburger.classList.toggle("active")
})

navMenu.addEventListener("click", () => {
    navMenu.classList.remove("active")
})

let prevScrollpos = window.scrollY;
window.onscroll = function() {
    const currentScrollPos = window.scrollY;
    const navBar = document.getElementById("navbar");
    if (prevScrollpos > currentScrollPos) {
    navBar.style.top = "0";
    } else {
    navBar.style.top = "-70px";
    navMenu.classList.remove("active")
    hamburger.classList.remove("active")
    }
    prevScrollpos = currentScrollPos;
}

