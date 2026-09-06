const navbar = document.getElementById("nave-bar");

window.addEventListener("scroll", ()=> {
    if (window.scrollY > 0) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
});


document.addEventListener("DOMContentLoaded", () => {

    // NAVBAR SCROLL
    const navbar = document.getElementById("navbar");
    if (navbar) {
        window.addEventListener("scroll", () => {
            navbar.classList.toggle(
                "scrolled",
                window.scrollY > 50
            );

            updateActiveNavLink();
            toggleBackToTop();
        });
    }

    // HAMBURGER MENU
    const hamburger = document.getElementById("hamburger");
    const navLinks = document.getElementById("navLinks");

    if (hamburger && navLinks) {
        hamburger.addEventListener("click", () => {
            hamburger.classList.toggle("open");
            navLinks.classList.toggle("mobile-open");
        });


        // Get all elements having class "nav-link"
        const navItems = document.getElementsByClassName("nav-link");
        for (const link of navItems) {
            link.addEventListener("click", () => {
                hamburger.classList.remove("open");
                navLinks.classList.remove("mobile-open");
            });
        }
    }
});

// skills buttons

const skillButtons = document.getElementById("skill-buttons");
let activeSkillButton = document.getElementById("frontEnd");
const skillContainer = document.getElementById("skills-container");
let activeSkillContainer = document.getElementById("frontEnd-skills");

skillButtons.addEventListener("click", (e)=> {
    if(e.target.id == "skill-buttons"){
        return ;
    }
    activeSkillButton.classList.remove("active");
    activeSkillButton = document.getElementById(`${e.target.id}`);
    activeSkillButton.classList.add("active");
    if(activeSkillContainer.id == `${e.target.id}-skills`) {
        return ;
    }
    activeSkillContainer.classList.remove("active");
    activeSkillContainer = document.getElementById(`${e.target.id}-skills`);
    activeSkillContainer.classList.add("active");
    skillContainer.append(activeSkillContainer);
    console.log("hello");
})