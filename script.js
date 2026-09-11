/* =========================================
   NAVIGATION
   ========================================= */

// Get all navigation links
const navLinks = document.querySelectorAll("nav a");

// Make navigation scroll smoothly
navLinks.forEach(function (link) {

    link.addEventListener("click", function (event) {

        const sectionID = link.getAttribute("href");

        // Make sure the link points to a section
        if (sectionID.startsWith("#")) {

            event.preventDefault();

            const section = document.querySelector(sectionID);

            if (section) {
                section.scrollIntoView({
                    behavior: "smooth"
                });
            }
        }

    });

});



/* =========================================
   LEARN MORE BUTTON
   ========================================= */

const learnMoreBtn = document.getElementById("learnMoreBtn");

if (learnMoreBtn) {

    learnMoreBtn.addEventListener("click", function () {

        document.getElementById("our-story").scrollIntoView({
            behavior: "smooth"
        });

    });

}



/* =========================================
   START HERE BUTTON
   ========================================= */

const startHereBtn = document.getElementById("startHereBtn");

if (startHereBtn) {

    startHereBtn.addEventListener("click", function () {

        document.getElementById("start-here").scrollIntoView({
            behavior: "smooth"
        });

    });

}



/* =========================================
   HERO IMAGE SLIDESHOW
   ========================================= */

const heroImages = document.querySelectorAll(".hero-image");

let currentHeroImage = 0;


// Hide all images except the first
heroImages.forEach(function (image, index) {

    if (index !== 0) {
        image.style.display = "none";
    }

});


// Change hero image every 5 seconds
if (heroImages.length > 1) {

    setInterval(function () {

        // Hide current image
        heroImages[currentHeroImage].style.display = "none";

        // Move to next image
        currentHeroImage++;

        if (currentHeroImage >= heroImages.length) {
            currentHeroImage = 0;
        }

        // Show next image
        heroImages[currentHeroImage].style.display = "block";

    }, 5000);

}



/* =========================================
   HERO NEXT / PREVIOUS BUTTONS
   ========================================= */

const nextHeroBtn = document.getElementById("nextHero");
const previousHeroBtn = document.getElementById("previousHero");


function showHeroImage(index) {

    heroImages.forEach(function (image) {
        image.style.display = "none";
    });

    heroImages[index].style.display = "block";

}


if (nextHeroBtn) {

    nextHeroBtn.addEventListener("click", function () {

        currentHeroImage++;

        if (currentHeroImage >= heroImages.length) {
            currentHeroImage = 0;
        }

        showHeroImage(currentHeroImage);

    });

}


if (previousHeroBtn) {

    previousHeroBtn.addEventListener("click", function () {

        currentHeroImage--;

        if (currentHeroImage < 0) {
            currentHeroImage = heroImages.length - 1;
        }

        showHeroImage(currentHeroImage);

    });

}



/* =========================================
   FAQ DROPDOWNS
   ========================================= */

const faqQuestions = document.querySelectorAll(".faq-question");

faqQuestions.forEach(function (question) {

    question.addEventListener("click", function () {

        const answer = question.nextElementSibling;

        // Open / close answer
        if (answer.style.display === "block") {

            answer.style.display = "none";

        } else {

            answer.style.display = "block";

        }

    });

});



/* =========================================
   SERVICES
   ========================================= */

const serviceButtons = document.querySelectorAll(".service-button");

serviceButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        const destination = button.getAttribute("data-target");

        const section = document.getElementById(destination);

        if (section) {

            section.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});



/* =========================================
   RESOURCE BUTTONS
   ========================================= */

const resourceButtons = document.querySelectorAll(".resource-button");

resourceButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        const resource = button.getAttribute("data-resource");

        if (resource) {

            window.location.href = resource;

        }

    });

});



/* =========================================
   CONTACT BUTTON
   ========================================= */

const contactButtons = document.querySelectorAll(".contact-button");

contactButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        document.getElementById("contact").scrollIntoView({
            behavior: "smooth"
        });

    });

});



/* =========================================
   MOBILE MENU
   ========================================= */

const menuButton = document.getElementById("menuButton");
const mobileMenu = document.getElementById("mobileMenu");


if (menuButton && mobileMenu) {

    menuButton.addEventListener("click", function () {

        mobileMenu.classList.toggle("show");

    });

}



/* =========================================
   START HERE STEPS
   ========================================= */

const steps = document.querySelectorAll(".start-step");

steps.forEach(function (step) {

    step.addEventListener("click", function () {

        // Remove active status from all steps
        steps.forEach(function (item) {
            item.classList.remove("active");
        });

        // Make selected step active
        step.classList.add("active");

    });

});



/* =========================================
   FORM
   ========================================= */

const contactForm = document.getElementById("contactForm");


if (contactForm) {

    contactForm.addEventListener("submit", function (event) {

        event.preventDefault();

        alert("Thank you! Your message has been received.");

        contactForm.reset();

    });

}