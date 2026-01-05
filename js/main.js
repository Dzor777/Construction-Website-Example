document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const links = document.querySelectorAll('.nav-links li');

    if (hamburger) {
        hamburger.addEventListener('click', () => {
            // Toggle Nav
            navLinks.classList.toggle('active');
            hamburger.classList.toggle('active');

            // Animate Links
            links.forEach((link, index) => {
                if (link.style.animation) {
                    link.style.animation = '';
                } else {
                    link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
                }
            });
        });
    }

    // Split Screen Hover Effect Enhancement
    const splitScreens = document.querySelectorAll('.split-screen');

    splitScreens.forEach(screen => {
        screen.addEventListener('mouseenter', () => {
            screen.classList.add('hover-active');
        });
        screen.addEventListener('mouseleave', () => {
            screen.classList.remove('hover-active');
        });
    });
});

// Add keyframes for link animations via JS or assume in CSS (Adding to CSS is better, but simple fade in here)
const styleSheet = document.createElement("style");
styleSheet.innerText = `
@keyframes navLinkFade {
    from {
        opacity: 0;
        transform: translateX(50px);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
}
`;
document.head.appendChild(styleSheet);
