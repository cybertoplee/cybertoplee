document.addEventListener("DOMContentLoaded", () => {
  // 1. Initialize Lucide Icons
  if (typeof lucide !== "undefined") {
    lucide.createIcons();
  }

  // 2. Mobile Menu Toggle
  const menuBtn = document.querySelector(".mobile-menu-btn");
  const navMobile = document.querySelector(".nav-mobile");
  const menuIcon = document.querySelector(".menu-icon");
  const closeIcon = document.querySelector(".close-icon");

  function toggleMenu() {
    const isOpen = navMobile.classList.toggle("open");
    if (isOpen) {
      menuIcon.classList.add("hidden");
      closeIcon.classList.remove("hidden");
      document.body.style.overflow = "hidden"; // Prevent background scroll when menu is open
    } else {
      menuIcon.classList.remove("hidden");
      closeIcon.classList.add("hidden");
      document.body.style.overflow = ""; // Restore scroll
    }
  }

  if (menuBtn && navMobile) {
    menuBtn.addEventListener("click", toggleMenu);
  }

  // Close mobile menu when a link is clicked
  const mobileLinks = document.querySelectorAll(".mobile-link");
  mobileLinks.forEach(link => {
    link.addEventListener("click", () => {
      navMobile.classList.remove("open");
      menuIcon.classList.remove("hidden");
      closeIcon.classList.add("hidden");
      document.body.style.overflow = "";
    });
  });

  // 3. Scroll Reveal Animation (Intersection Observer)
  const revealElements = document.querySelectorAll(".scroll-reveal");

  const revealCallback = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
        // Option: Unobserve if animation should run only once
        // observer.unobserve(entry.target);
      }
    });
  };

  const revealObserver = new IntersectionObserver(revealCallback, {
    root: null,
    threshold: 0.1, // Trigger when 10% of element is visible
    rootMargin: "0px 0px -50px 0px" // Slight offset for better feel
  });

  revealElements.forEach(el => revealObserver.observe(el));

  // 4. Scroll Spy Navigation (Highlight active tab while scrolling)
  const sections = document.querySelectorAll("section");
  const desktopLinks = document.querySelectorAll(".nav-link");

  function scrollSpy() {
    let currentSectionId = "";
    const scrollPosition = window.scrollY + 120; // Offset for header height

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;

      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        currentSectionId = section.getAttribute("id");
      }
    });

    // Update active class on desktop links
    desktopLinks.forEach(link => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${currentSectionId}`) {
        link.classList.add("active");
      }
    });

    // Update active class on mobile links
    mobileLinks.forEach(link => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${currentSectionId}`) {
        link.classList.add("active");
      }
    });
  }

  window.addEventListener("scroll", scrollSpy);
  // Run once initially to set starting active tab
  scrollSpy();
});
