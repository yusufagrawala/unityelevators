// JavaScript Document

/* ==========================================
   UNITY ELEVATORS - script.js
   Modern JavaScript
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* ==========================
       Mobile Navigation
    ========================== */

    const menuBtn = document.querySelector(".menu-btn");
    const navLinks = document.querySelector(".nav-links");

    if (menuBtn && navLinks) {
        menuBtn.addEventListener("click", () => {
            navLinks.classList.toggle("active");

            if (navLinks.classList.contains("active")) {
                menuBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>';
            } else {
                menuBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';
            }
        });

        document.querySelectorAll(".nav-links a").forEach(link => {
            link.addEventListener("click", () => {
                navLinks.classList.remove("active");
                menuBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';
            });
        });
    }

    /* ==========================
       Sticky Header
    ========================== */

    const header = document.querySelector("header");

    window.addEventListener("scroll", () => {

        if (!header) return;

        if (window.scrollY > 50) {
            header.style.background = "#081628";
            header.style.boxShadow = "0 4px 15px rgba(0,0,0,.25)";
        } else {
            header.style.background = "#0B1F3A";
            header.style.boxShadow = "none";
        }

    });

    /* ==========================
       Scroll To Top Button
    ========================== */

    const topBtn = document.getElementById("topBtn");

    window.addEventListener("scroll", () => {

        if (!topBtn) return;

        if (window.pageYOffset > 300) {
            topBtn.style.display = "flex";
        } else {
            topBtn.style.display = "none";
        }

    });

    if (topBtn) {

        topBtn.addEventListener("click", () => {

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        });

    }

    /* ==========================
       Animated Counter
    ========================== */

    const counters = document.querySelectorAll(".counter-number");

    const runCounter = () => {

        counters.forEach(counter => {

            const target = Number(counter.dataset.target);
            const speed = 100;
            let count = 0;

            const update = () => {

                const increment = Math.ceil(target / speed);

                count += increment;

                if (count < target) {
                    counter.innerText = count;
                    requestAnimationFrame(update);
                } else {
                    counter.innerText = target;
                }

            };

            update();

        });

    };

    const counterSection = document.querySelector(".counter");

    if (counterSection) {

        const observer = new IntersectionObserver(entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    runCounter();
                    observer.disconnect();

                }

            });

        }, { threshold: 0.4 });

        observer.observe(counterSection);

    }

    /* ==========================
       Scroll Reveal Animation
    ========================== */

    const revealElements = document.querySelectorAll(
        ".service-card, .type-card, .why-card, .testimonial, .about-grid, .contact-grid"
    );

    revealElements.forEach(el => {

        el.style.opacity = "0";
        el.style.transform = "translateY(50px)";
        el.style.transition = "all .8s ease";

    });

    const reveal = () => {

        revealElements.forEach(el => {

            const windowHeight = window.innerHeight;
            const elementTop = el.getBoundingClientRect().top;

            if (elementTop < windowHeight - 100) {

                el.style.opacity = "1";
                el.style.transform = "translateY(0)";

            }

        });

    };

    window.addEventListener("scroll", reveal);

    reveal();

    /* ==========================
       Active Navigation
    ========================== */

    const sections = document.querySelectorAll("section");
    const navItems = document.querySelectorAll(".nav-links a");

    window.addEventListener("scroll", () => {

        let current = "";

        sections.forEach(section => {

            const sectionTop = section.offsetTop - 120;
            const sectionHeight = section.clientHeight;

            if (pageYOffset >= sectionTop) {
                current = section.getAttribute("id");
            }

        });

        navItems.forEach(link => {

            link.classList.remove("active");

            if (link.getAttribute("href") === "#" + current) {
                link.classList.add("active");
            }

        });

    });

    /* ==========================
       Contact Form
    ========================== */

    const form = document.getElementById("contactForm");

    if (form) {

        form.addEventListener("submit", function (e) {

            e.preventDefault();

            const name = document.getElementById("name").value.trim();
            const phone = document.getElementById("phone").value.trim();
            const email = document.getElementById("email").value.trim();

            if (name === "" || phone === "" || email === "") {

                alert("Please fill all required fields.");
                return;

            }

            alert(
                "Thank you, " +
                name +
                "! Your inquiry has been submitted successfully."
            );

            form.reset();

        });

    }

    /* ==========================
       Smooth Scroll
    ========================== */

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {

        anchor.addEventListener("click", function (e) {

            e.preventDefault();

            const target = document.querySelector(this.getAttribute("href"));

            if (target) {

                window.scrollTo({
                    top: target.offsetTop - 70,
                    behavior: "smooth"
                });

            }

        });

    });

});
