const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");
const closeIcon = document.getElementById("nav-close");
const navlink = document.querySelectorAll(".nav__link");

navlink.forEach((link) =>
  link.addEventListener("click", () => {
    navMenu.classList.add("hidden");
  })
);

closeIcon.addEventListener("click", () => {
  navMenu.classList.add("hidden");
});

hamburger.addEventListener("click", () => {
  // navMenu.classList.add("hidden");
  navMenu.classList.remove("hidden");
});

// *************TABS************//

const tabs = document.querySelectorAll(".tabs_wrap ul li");
const all = document.querySelectorAll(".item__wrap");
const foods = document.querySelectorAll(".food");
const beverages = document.querySelectorAll(".beverage");
const snacks = document.querySelectorAll(".snack");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    tabs.forEach((tab) => {
      tab.classList.remove("active");
    });

    tab.classList.add("active");

    const tabval = tab.getAttribute("data-tabs");

    all.forEach((item) => {
      item.style.display = "none";
    });

    if (tabval == "food") {
      foods.forEach((item) => {
        item.style.display = "block";
      });
    } else if (tabval == "snack") {
      snacks.forEach((item) => {
        item.style.display = "block";
      });
    } else if (tabval == "beverage") {
      beverages.forEach((item) => {
        item.style.display = "block";
      });
    } else {
      all.forEach((item) => {
        item.style.display = "block";
      });
    }
  });
});

// **************************show scroll****************** //

const scrollup = () => {
  const scrollupBtn = document.getElementById("scroll-up");

  if (this.scrollY >= 250) {
    scrollupBtn.classList.remove("-bottom-1/2");
    scrollupBtn.classList.add("bottom-4");
  } else {
    scrollupBtn.classList.add("-bottom-1/2");
    scrollupBtn.classList.remove("bottom-4");
  }
};

window.addEventListener("scroll", scrollup);

// ****************change background header ************//

const scrollHeader = () => {
  const header = document.getElementById("header");

  if (this.scrollY >= 50) {
    header.classList.add("border-b", "border-gray-200");
  } else {
    header.classList.remove("border-b", "border-gray-200");
  }
};

window.addEventListener("scroll", scrollHeader);

// *******************dark mode***********//

const html = document.querySelector("html");
const themeBtn = document.getElementById("theme-toggle");

themeBtn.addEventListener("click", (e) => {
  if (localStorage.getItem("mode") == "light") {
    darkMode();
  } else {
    lightmode();
  }
});

if (localStorage.getItem("mode") == "dark") {
  darkMode();
} else {
  lightmode();
}

function lightmode() {
  html.classList.remove("dark");
  themeBtn.classList.replace("ri-sun-line", "ri-moon-line");
  localStorage.setItem("mode", "light");
}

function darkMode() {
  html.classList.add("dark");
  themeBtn.classList.replace("ri-moon-line", "ri-sun-line");
  localStorage.setItem("mode", "dark");
}

// scroll reveal

const sr = ScrollReveal({
  delay: 300,
  origin: top,
  distance: "60px",
  delay: 200,
});

sr.reveal(".home__image");
sr.reveal(".home__content", { delay: 150 });
sr.reveal(".category__card", { interval: 300 });

sr.reveal(".promo__card-1", { origin: "left" });
sr.reveal(".promo__card-2", { origin: "right" });

sr.reveal(".about__img", { origin: "bottom" });
sr.reveal(".about__content", { origin: "top" });

sr.reveal(".menu__items", { origin: "left" });

sr.reveal(".customer__review", { origin: "right" });

sr.reveal(".footer");
