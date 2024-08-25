// Toggle Menu Functionality
const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click",(e)=>{
    navLinks.classList.toggle("open");
    const isOpen = navLinks.classList.contains("open");
    menuBtnIcon.setAttribute("class",isOpen ? "ri-close-line":"ri-menu-line");
});

navLinks.addEventListener("click",(e)=>{
    navLinks.classList.remove("open");
    menuBtnIcon.setAttribute("class","ri-menu-line");
}); 

// Scroll Reveal
const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
}
ScrollReveal().reveal(".home_container h1",{
    ...scrollRevealOption,
});

ScrollReveal().reveal(".home_container p",{
    ...scrollRevealOption,
    delay: 500,
});

ScrollReveal().reveal(".home_container form",{
    ...scrollRevealOption,
    delay: 1000,
});

ScrollReveal().reveal(".destination_card",{
    ...scrollRevealOption,
    interval: 500,
});

ScrollReveal().reveal(".deals_card",{
    ...scrollRevealOption,
    interval: 500,
});

const swiper = new Swiper(".swiper",{
    slidesPerView: "auto",
    spaceBetween: 20,
    pagination:{
        el:" .swiper-pagination"
    }
});
