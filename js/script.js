// ===============================
// SELECTORS
// ===============================
const navLinks = document.querySelectorAll("header nav a");
const logoLink = document.querySelector(".logo");
const sections = document.querySelectorAll("section");
const menuIcon = document.querySelector("#menu-icon");
const navbar = document.querySelector("header nav");

// ===============================
// FIXED MOBILE MENU
// ===============================

menuIcon.addEventListener("click", () => {
    menuIcon.classList.toggle("bx-x");
    navbar.classList.toggle("active");
});

// ===============================
// PAGE TRANSITION FUNCTION
// ===============================
const activePage = () => {
    const header = document.querySelector("header");
    const barsBox = document.querySelector(".bars-box");

    header.classList.remove("active");
    setTimeout(() => header.classList.add("active"), 1100);

    // Remove active from nav links
    navLinks.forEach(link => link.classList.remove("active"));

    // Remove animation class from bars box
    if (barsBox) {
        barsBox.classList.remove("active");
        setTimeout(() => barsBox.classList.add("active"), 1100);
    }

    // Hide all sections
    sections.forEach(section => section.classList.remove("active"));

    // Close mobile menu
    menuIcon.classList.remove("bx-x");
    navbar.classList.remove("active");
};

// ===============================
// NAVIGATION CLICK
// ===============================
navLinks.forEach((link, idx) => {
    link.addEventListener("click", () => {
        if (!link.classList.contains("active")) {
            activePage();

            link.classList.add("active");

            setTimeout(() => {
                sections[idx].classList.add("active");
            }, 1100);
        }
    });
});

// ===============================
// LOGO CLICK (GO HOME)
// ===============================
logoLink.addEventListener("click", () => {
    if (!navLinks[0].classList.contains("active")) {
        activePage();

        navLinks[0].classList.add("active");

        setTimeout(() => {
            sections[0].classList.add("active");
        }, 1100);
    }
});

// ===============================
// RESUME BUTTONS
// ===============================
const resumeBtns = document.querySelectorAll(".resume-btn");
const resumeDetails = document.querySelectorAll(".resume-detail");

resumeBtns.forEach((btn, idx) => {
    btn.addEventListener("click", () => {

        resumeBtns.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");

        resumeDetails.forEach(detail => detail.classList.remove("active"));
        resumeDetails[idx].classList.add("active");
    });
});

// ===============================
// PORTFOLIO CAROUSEL
// ===============================
const arrowRight = document.querySelector(".portfolio-box .navigation .arrow-right");
const arrowLeft = document.querySelector(".portfolio-box .navigation .arrow-left");

let index = 0;
const maxIndex = 3; // change here if you add more images

const activePortfolio = () => {
    const imgSlide = document.querySelector(".portfolio-carousel .img-slide");
    const portfolioDetails = document.querySelectorAll(".portfolio-detail");

    // Slider movement
    imgSlide.style.transform = `translateX(calc(${-100 * index}% - ${index * 2}rem))`;

    // Active portfolio text
    portfolioDetails.forEach(detail => detail.classList.remove("active"));
    portfolioDetails[index].classList.add("active");

    // Disable arrows correctly
    arrowLeft.classList.toggle("disabled", index === 0);
    arrowRight.classList.toggle("disabled", index === maxIndex);
};

arrowRight.addEventListener("click", () => {
    if (index < maxIndex) index++;
    activePortfolio();
});

arrowLeft.addEventListener("click", () => {
    if (index > 0) index--;
    activePortfolio();
});
