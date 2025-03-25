
document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".navbar ul li a");

    function changeActiveNav() {
        let current = "";

        sections.forEach((section) => {
            const sectionTop = section.offsetTop - 100;
            if (scrollY >= sectionTop) {
                current = section.getAttribute("id");
            }
        });

        navLinks.forEach((link) => {
            link.parentElement.classList.remove("active");
            if (link.getAttribute("href").includes(current)) {
                link.parentElement.classList.add("active");
            }
        });
    }

    window.addEventListener("scroll", changeActiveNav);

    navLinks.forEach(link => {
        link.addEventListener("click", function () {
            setTimeout(changeActiveNav, 200);
        });
    });
});
