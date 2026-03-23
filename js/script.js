/* ================================= */
/* MENU HAMBURGER */
/* ================================= */

const menuToggle = document.querySelector(".menu-toggle");
const sideMenu = document.querySelector(".side-menu");
const menuClose = document.querySelector(".menu-close");
const menuOverlay = document.querySelector(".menu-overlay");
const sideMenuLinks = document.querySelectorAll(".side-nav a");

if (menuToggle && sideMenu && menuClose && menuOverlay) {
    const openMenu = () => {
        sideMenu.classList.add("open");
        menuOverlay.classList.add("show");
        menuToggle.setAttribute("aria-expanded", "true");
        sideMenu.setAttribute("aria-hidden", "false");
        document.body.style.overflow = "hidden";
    };

    const closeMenu = () => {
        sideMenu.classList.remove("open");
        menuOverlay.classList.remove("show");
        menuToggle.setAttribute("aria-expanded", "false");
        sideMenu.setAttribute("aria-hidden", "true");
        document.body.style.overflow = "";
    };

    menuToggle.addEventListener("click", openMenu);
    menuClose.addEventListener("click", closeMenu);
    menuOverlay.addEventListener("click", closeMenu);

    sideMenuLinks.forEach(link => {
        link.addEventListener("click", closeMenu);
    });

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
            closeMenu();
        }
    });
}

/* ================================= */
/* APPARITION DES SECTIONS AU SCROLL */
/* ================================= */

const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("reveal-visible");
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.2
});

revealElements.forEach((element) => {
    revealObserver.observe(element);
});

/* ================================= */
/* FILTRES DE LA SECTION COMPÉTENCES */
/* ================================= */

const filterButtons = document.querySelectorAll(".filter-btn");
const skillCards = document.querySelectorAll(".skill-card");

filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const filter = button.dataset.filter;

        filterButtons.forEach((btn) => btn.classList.remove("active"));
        button.classList.add("active");

        skillCards.forEach((card) => {
            const category = card.dataset.category;

            if (filter === "all" || category === filter) {
                card.style.display = "flex";
            } else {
                card.style.display = "none";
            }
        });
    });
});