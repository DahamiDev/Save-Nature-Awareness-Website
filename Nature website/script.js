const navbar = document.querySelector(".navbar"); // meken thama navbar eke parts eke athulema thiyan inne
const burger = document.querySelector(".burger"); // hamburger menu eka select karanne meken
const nav = document.querySelector(".nav-links"); // navigation links wala ul eka select karanne meken
const navLinks = document.querySelectorAll(".nav-links li"); // navigation links wala li tika select karanwa meya
const sections = document.querySelectorAll("section"); // meken thamai okkoma sections tika select karanne

// Navbar scroll karamu
window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// meya hode karanwa scrol down karaddi
let lastScrollY = window.scrollY;
const delta = 10;
window.addEventListener("scroll", () => {
  const currentY = window.scrollY;
  if (Math.abs(currentY - lastScrollY) <= delta) return;

  if (currentY > lastScrollY && currentY > 120) {
    // scrolling down
    navbar.classList.add("is-hidden");
  } else {
    // scrolling up or near top
    navbar.classList.remove("is-hidden");
  }

  lastScrollY = currentY;
});

// Mobile menu
burger.addEventListener("click", () => {
  // hamburger menu eka click karaddi kiyana eka
  nav.classList.toggle("active"); // navigation links wala ul eka active karanwa
  burger.classList.toggle("active"); // hamburger menu eka active karanwa meya

  // Animate links
  navLinks.forEach((link, index) => {
    // navigation links wala li tika loop karanwa meya meka forEack loop eka. damma loops 😎
    if (link.style.animation) {
      // link eke style eke animation thiyenawanam kiyana condition eka
      link.style.animation = ""; // animation eka remove karanwa
    } else {
      link.style.animation = `navLinkFade 0.5s ease forwards ${
        // animation eka add karanwa meya
        index / 7 + 0.3 // delay eka li eka index eka widiyata
      }s`;
    }
  });
});

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault(); // meya prevent karanwa default behavior eka
    nav.classList.remove("active"); // navigation links wala ul eka inactive karanwa
    burger.classList.remove("active"); // hamburger menu eka inactive karanwa

    const target = document.querySelector(this.getAttribute("href")); // meken target eka gannwa
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

const reveal = () => {
  // ara dala thiyana lassna animated cards tika a wdiyatathiyanne meya nisa .
  // Scroll reveal animation hariyata live seen ekka wage karanne
  sections.forEach((section) => {
    const sectionTop = section.getBoundingClientRect().top; //
    const windowHeight = window.innerHeight;

    if (sectionTop < windowHeight - 150) {
      // section eka window eke 150px athule awoth
      section.style.opacity = "1";
      section.style.transform = "translateY(0)";
    }
  });
};

// Initialize section animations
sections.forEach((section) => {
  if (section.id !== "home") {
    // home section eka hariyata animate wenne ne
    section.style.opacity = "0"; // eka invisible karanwa
    section.style.transform = "translateY(20px)";
    section.style.transition = "all 0.6s ease";
  }
});

// Contact form handling
const contactForm = document.querySelector(".contact-form"); // meken contact form eka select karanwa
if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    // form eka submit karaddi
    e.preventDefault();
    // Add form submission logic eka me 👇
    alert("Thank you for your message! We will get back to you soon."); // meka alert ekak display karanwa
    contactForm.reset(); // form eka reset karanwa meken dan
  });
}

window.addEventListener("scroll", reveal); // scroll karaddi reveal function eka call karanwa
// page eka pahalata scroll karan yaddi, meya thamai a dewal penna thiyanne.
reveal();
