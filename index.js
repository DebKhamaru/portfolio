const navbar = document.getElementById("nave-bar");

window.addEventListener("scroll", ()=> {
    if (window.scrollY > 0) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
});

const navLinks = document.querySelectorAll(".nav-link");
const sections = document.querySelectorAll("section");

let isScrollingByClick = false;

navLinks.forEach(link => {
    link.addEventListener("click", function () {

        isScrollingByClick = true;

        // Remove active from all buttons
        navLinks.forEach(nav => nav.classList.remove("active"));

        // Immediately activate the clicked button
        this.classList.add("active");

        // Allow scroll detection again after smooth scrolling
        setTimeout(() => {
            isScrollingByClick = false;
        }, 1000);
    });
});

window.addEventListener("scroll", () => {

    // Don't change active button while smooth scrolling
    if (isScrollingByClick) 
        return;

    let currentSection = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (window.scrollY >= sectionTop - 200) {
            currentSection = section.id;
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");

        if (link.getAttribute("href") === `#${currentSection}`) {
            link.classList.add("active");
        }
    });
});

// ─── SKILLS TABS ───
// document.querySelectorAll('skill-button').forEach(btn => {
//     btn.addEventListener('click', () => {
//         document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
//         document.querySelectorAll('.skills-panel').forEach(p => p.classList.remove('active'));
//         btn.classList.add('active');
//         const panel = document.getElementById('panel-' + btn.dataset.tab);
//         if (panel) {
//             panel.classList.add('active');
//             panel.querySelectorAll('.reveal:not(.visible)').forEach(el => {
//                 setTimeout(() => revealObserver.observe(el), 50);
//             });
//         }
//     });
// });