// =========================
// Custom Cursor
// =========================
const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", (e) => {
  cursor.style.opacity = "1";
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";
});

// =========================
// GSAP Setup
// =========================
gsap.registerPlugin(ScrollTrigger);

// =========================
// NAV + HERO (Page Load)
// =========================
const introTl = gsap.timeline();

introTl
  .from(".left-nav img", {
    y: -80,
    opacity: 0,
    duration: 0.6
  })
  .from(".right-nav li", {
    y: -60,
    opacity: 0,
    stagger: 0.1,
    duration: 0.4
  })
  .from(".resume-btn, .ri-menu-fill", {
    opacity: 0,
    stagger: 0.2,
    duration: 0.4
  })
  .from(".intro-text h1", {
    y: 60,
    opacity: 0,
    duration: 0.4
  })
  .from(".intro-text h2", {
    y: 60,
    opacity: 0,
    duration: 0.4
  })
  .from(".intro-text h3", {
    y: 60,
    opacity: 0,
    duration: 0.4
  })
  .from(".intro-text h4", {
    y: 40,
    opacity: 0,
    duration: 0.6
  })
  .from(".video-box video", {
   
    opacity: 0,
    duration: 0.8
  });

// =========================
// ABOUT SECTION (Scroll)
// =========================
const aboutTl = gsap.timeline({
  scrollTrigger: {
    trigger: "#about",
    start: "top 70%",
    toggleActions: "play none none none"
  }
});

aboutTl
  .from("#about h1", {
    y: 60,
    opacity: 0,
    duration: 0.4
  })
  .from("#about .left p", {
    y: 40,
    opacity: 0,
    duration: 0.4,
    stagger: 0.15
  })
  .from("#about .skills h3", {
    y: 30,
    opacity: 0,
    duration: 0.3
  })
  .from("#about .skills li", {
    y: 20,
    opacity: 0,
    duration: 0.25,
    stagger: 0.05   // fast, almost instant
  });

// =========================
// PROJECTS SECTION (Scroll)
// =========================
gsap.from("#project h1", {
  y: 80,
  opacity: 0,
  scrollTrigger: {
    trigger: "#project",
    start: "top 75%"
  }
});

gsap.from("#project .box1, #project .box2, #project .box3", {
  y: 120,
  opacity: 0,
  stagger: 0.3,
  duration: 0.8,
  scrollTrigger: {
    trigger: "#project",
    start: "top 70%"
  }
});

// =========================
// CONTACT SECTION (Scroll)
// =========================
const contactTl = gsap.timeline(
  
);

contactTl
  .from("#contact h1", {
    y: 60,
    opacity: 0,
    duration: 0.4
  })
  .from("#contact li", {
    scale: 0,
    opacity: 0,
    stagger: 0.2,
    duration: 0.4
  });
