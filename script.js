/*==================================================
        Dr. Pritisha Sarkar Portfolio
===================================================*/

/*==========================
      Mobile Navigation
===========================*/

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle) {

    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });

}

/* Close menu after clicking a link */

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

    });

});

/*==========================
      Scroll To Top
===========================*/

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});

/*==========================
      Active Navigation
===========================*/

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

/*==========================
      Fade Animation
===========================*/

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";

            entry.target.style.transform = "translateY(0)";

        }

    });

}, {

    threshold: 0.2

});

document.querySelectorAll(

".card,.project-card,.publication-card,.timeline-item"

).forEach(el => {

    el.style.opacity = "0";

    el.style.transform = "translateY(40px)";

    el.style.transition = "all 0.8s ease";

    observer.observe(el);

});

/*==========================
      Skill Bar Animation
===========================*/

const skillBars = document.querySelectorAll(".progress-bar");

const skillObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            const width = entry.target.style.width;

            entry.target.style.width = "0";

            setTimeout(() => {

                entry.target.style.width = width;

            }, 200);

        }

    });

}, {

    threshold: 0.5

});

skillBars.forEach(bar => {

    skillObserver.observe(bar);

});

/*==========================
      Navbar Shadow
===========================*/

window.addEventListener("scroll", () => {

    const header = document.querySelector("header");

    if (window.scrollY > 40) {

        header.style.boxShadow =
            "0 6px 20px rgba(0,0,0,0.15)";

    } else {

        header.style.boxShadow =
            "0 2px 10px rgba(0,0,0,0.08)";

    }

});

/*==========================
      Current Year Footer
===========================*/

const footer = document.querySelector("footer p");

if (footer) {

    footer.innerHTML =
        `© ${new Date().getFullYear()} Dr. Pritisha Sarkar | Academic Portfolio`;

}

.nav-links a.active{
    color:#0b4d91;
    font-weight:700;
}

.nav-links a.active::after{
    width:100%;
}
