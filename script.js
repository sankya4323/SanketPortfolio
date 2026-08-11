const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");


// Mobile menu

menuBtn.addEventListener("click", function () {

    navMenu.classList.toggle("active");

});


// Close menu when clicking a link

const navLinks = document.querySelectorAll("#navMenu a");

navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navMenu.classList.remove("active");

    });

});