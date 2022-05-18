//Navigation bar effects on scroll
const scrollToTopBtn = this.document.querySelector(".srollToTop-btn");
scrollToTopBtn.addEventListener("click", () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});

window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
  scrollToTopBtn.classList.toggle("active", window.scrollY > 500);
  const sections = document.querySelectorAll("section");
  const scrollY = window.scrollY;
  sections.forEach((current) => {
    let sectionHeight = current.offsetHeight;
    let sectionTop = current.offsetTop - 50;
    let id = current.getAttribute("id");
    if (scrollY > sectionTop && scrollY <= sectionHeight + sectionTop) {
      document
        .querySelector(".nav-items a[href*=" + id + "]")
        .classList.add("active");
    } else {
      document
        .querySelector(".nav-items a[href*=" + id + "]")
        .classList.remove("active");
    }
  });
});

const themeBtn = document.querySelector(".theme-btn");
const getCurrentTheme = () =>
  document.body.classList.contains("dark-theme") ? "dark" : "light";
const getCurrentThemeIcon = () =>
  themeBtn.classList.contains("sun") ? "sun" : "moon";
const savedTheme = localStorage.getItem("theme");
const saveThemeIcon = localStorage.getItem("theme-icon");
if (savedTheme) {
  document.body.classList[savedTheme === "dark" ? "add" : "remove"](
    "dark-theme"
  );
  themeBtn.classList[saveThemeIcon === "sun" ? "add" : "remove"]("sun");
}

themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");
  themeBtn.classList.toggle("sun");

  localStorage.setItem("theme", getCurrentTheme());
  localStorage.setItem("theme-icon", getCurrentThemeIcon());
});

// Services section modal
const serviceModals = document.querySelectorAll(".service-modal");
const learnmoreBtns = document.querySelectorAll(".learn-more-btn");
const modalCloseBtns = document.querySelectorAll(".modal-close-btn");

var modal = function (modalClickIndex) {
  serviceModals[modalClickIndex].classList.add("active");
};

learnmoreBtns.forEach((learnmoreBtn, i) => {
  learnmoreBtn.addEventListener("click", () => {
    modal(i);
  });
});

modalCloseBtns.forEach((modalCloseBtn) => {
  modalCloseBtn.addEventListener("click", () => {
    serviceModals.forEach((modalView) => {
      modalView.classList.remove("active");
    });
  });
});

// portfolio section modal
const portfolioModals = document.querySelectorAll(".portfolio-modal");
const imgCards = document.querySelectorAll(".img-card");
const portfolioCloseBtns = document.querySelectorAll(".portfolio-close-btn");

var portfolioModal = function (modalClickIndex) {
  portfolioModals[modalClickIndex].classList.add("active");
};

imgCards.forEach((imgcard, i) => {
  imgcard.addEventListener("click", () => {
    portfolioModal(i);
  });
});

portfolioCloseBtns.forEach((closeBtn) => {
  closeBtn.addEventListener("click", () => {
    portfolioModals.forEach((modalView) => {
      modalView.classList.remove("active");
    });
  });
});
// swiper
var swiper = new Swiper(".client-swiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// menu close
const navMenuBtn = document.querySelector(".nav-menu-btn");
const navCloseBtn = document.querySelector(".nav-close-btn");
const navigation = document.querySelector(".naviation");
const navItems = document.querySelectorAll(".nav-items a");

navMenuBtn.addEventListener("click", () => {
  navigation.classList.add("active");
});
navCloseBtn.addEventListener("click", () => {
  navigation.classList.remove("active");
});
navItems.forEach((navItem) => {
  navItem.addEventListener("click", () => {
    navigation.classList.remove("active");
  });
});

//ScrollReveal

ScrollReveal({
  distance: "60px",
  duration: 2000,
  delay: 100,
});

ScrollReveal().reveal(".home .info h2,.section-title-01,.section-title-02", {
  delay: 500,
  origin: "left",
});
ScrollReveal().reveal(".home .info h3, .home .info p, .about-info .btn", {
  delay: 600,
  origin: "right",
});
ScrollReveal().reveal(".home .info .btn", { delay: 700, origin: "bottom" });
ScrollReveal().reveal(".media-icons i,.contact-left li", {
  delay: 500,
  origin: "left",
  interval: 200,
});
ScrollReveal().reveal(".home-img, .about-img", { delay: 500, origin: "bottom" });
ScrollReveal().reveal(".about .descrption, .contact-right", {
  delay: 600,
  origin: "right",
});
ScrollReveal().reveal(".about .professional-list li", {
  delay: 500,
  origin: "right",
  interval: 200,
});
ScrollReveal().reveal(
  ".skills-description, .services-description, .contact-card, .client-swiper, .contact-left h2",
  {
    delay: 700,
    origin: "left",
  }
);
ScrollReveal().reveal(
  ".experience-card, .service-card, .education, .portfolio .img-card",
  {
    delay: 800,
    origin: "bottom",
    interval: 200,
  }
);
ScrollReveal().reveal(
    "footer .group",
    {
      delay: 500,
      origin: "top",
      interval: 200,
    }
  );
  
