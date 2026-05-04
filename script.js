document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('.tab-link');
    const sections = document.querySelectorAll('.tab-content');

    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const target = link.getAttribute('data-target');
            
            // Toggle Classes
            links.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
            
            sections.forEach(s => s.classList.remove('active'));
            const activeSection = document.getElementById(target);
            activeSection.classList.add('active');
            
            // Reset scroll position for the new section
            activeSection.scrollTop = 0;
        });
    });

    // Modal Control
    const modal = document.getElementById("contactModal");
    const openBtn = document.getElementById("openModal");
    const closeBtn = document.querySelector(".close-button");

    openBtn.onclick = () => modal.style.display = "block";
    closeBtn.onclick = () => modal.style.display = "none";
    
    window.onclick = (event) => {
        if (event.target == modal) modal.style.display = "none";
    }
});
