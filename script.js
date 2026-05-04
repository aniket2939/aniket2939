document.addEventListener('DOMContentLoaded', function(){

    // TYPING EFFECT
    const text = 'ENGINEERING LEAD • BACKEND ARCHITECT • CLOUD SYSTEMS';
    let i = 0;
    function typing(){
        if(i < text.length){
            document.getElementById('typing').innerHTML += text.charAt(i);
            i++;
            setTimeout(typing, 65);
        }
    }
    typing();

    // CONTACT MODAL
    const modal = document.getElementById('contactModal');
    const btn = document.getElementById('contactBtn');
    const close = document.querySelector('.close');

    btn.addEventListener('click', ()=> modal.style.display = 'flex');
    close.addEventListener('click', ()=> modal.style.display = 'none');
    window.addEventListener('click', (e)=>{
        if(e.target === modal){
            modal.style.display = 'none';
        }
    });

    // SCROLL ACTIVE NAV
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.navbar a');

    window.addEventListener('scroll', ()=>{
        let current = '';
        sections.forEach(section=>{
            const top = window.scrollY;
            const offset = section.offsetTop - 200;
            const height = section.offsetHeight;
            if(top >= offset && top < offset + height){
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link=>{
            link.classList.remove('active');
            if(link.getAttribute('href') === '#' + current){
                link.classList.add('active');
            }
        });
    });

    // REVEAL ANIMATION
    const observer = new IntersectionObserver(entries=>{
        entries.forEach(entry=>{
            if(entry.isIntersecting){
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
            }
        });
    },{threshold:0.15});

    document.querySelectorAll('.timeline-card,.skill-card,.award-card,.cert-card,.kpi').forEach(el=>{
        el.style.opacity = 0;
        el.style.transform = 'translateY(40px)';
        el.style.transition = 'all .7s ease';
        observer.observe(el);
    });
});