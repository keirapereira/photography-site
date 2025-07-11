const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
    navLinks.classList.toggle("open")

    const isOpen = navLinks.classList.contains("open");
    menuBtnIcon.setAttribute("class", isOpen?"ri-close-line":"ri-menu-line");
})

navLinks.addEventListener("click", (e) => {
    navLinks.classList.remove("open");
    menuBtnIcon.setAttribute("class", "ri-menu-line");
})

function createImage() {
    let img = document.createElement("img");
    img.src = 'assets/camera 2.jpg';
    document.getElementById("logo_between").appendChild(img).style.width = "50px";
}

if (window.innerWidth > 768) {
    createImage()
}

const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
};

ScrollReveal().reveal(".about_container .section_header", {
    ...scrollRevealOption,
});

ScrollReveal().reveal(".about_container .section_description", {
    ...scrollRevealOption,
    delay: 500,
    interval: 500
});

ScrollReveal().reveal(".about_container img", {
    ...scrollRevealOption,
    delay: 1500,
});

