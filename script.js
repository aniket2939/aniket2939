// Fade in elements on scroll
const faders = document.querySelectorAll('.about-card, .work-block, .skill-category');
const appearOptions = { threshold: 0.15, rootMargin: "0px 0px -50px 0px" };

const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('appear');
        appearOnScroll.unobserve(entry.target);
    });
}, appearOptions);

faders.forEach(fader => {
    fader.style.opacity = "0";
    fader.style.transform = "translateY(30px)";
    fader.style.transition = "all 0.8s ease-out";
    appearOnScroll.observe(fader);
});

// Implementation of the observer class injection
window.addEventListener('scroll', () => {
    faders.forEach(fader => {
        const top = fader.getBoundingClientRect().top;
        if(top < window.innerHeight - 100) {
            fader.style.opacity = "1";
            fader.style.transform = "translateY(0)";
        }
    });
});
