// ===============================
// MENU HAMBURGER UNTUK HP
// ===============================

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle && navLinks) {

    menuToggle.addEventListener("click", function () {

        navLinks.classList.toggle("show");

        // Mengubah icon ☰ menjadi ✕
        if (navLinks.classList.contains("show")) {
            menuToggle.textContent = "✕";
        } else {
            menuToggle.textContent = "☰";
        }

    });

}


// ===============================
// MENUTUP MENU SETELAH DIKLIK
// ===============================

const menuItems = document.querySelectorAll(".nav-links a");

menuItems.forEach(function(item) {

    item.addEventListener("click", function() {

        navLinks.classList.remove("show");

        if (menuToggle) {
            menuToggle.textContent = "☰";
        }

    });

});


// ===============================
// ANIMASI CARD
// ===============================

const cards = document.querySelectorAll(".feature-card");

const observer = new IntersectionObserver(function(entries) {

    entries.forEach(function(entry) {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";

        }

    });

}, {
    threshold: 0.1
});


cards.forEach(function(card) {

    card.style.opacity = "0";
    card.style.transform = "translateY(20px)";
    card.style.transition = "0.6s ease";

    observer.observe(card);

});
