document.addEventListener('DOMContentLoaded', () => {
    const navItems = document.querySelectorAll('.nav-item');
    const views = document.querySelectorAll('.view');

    navItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const targetView = item.getAttribute('data-view');

            // 1. Update Navigation UI
            navItems.forEach(nav => nav.classList.remove('active'));
            item.classList.add('active');

            // 2. Switch HTML View
            views.forEach(view => {
                view.classList.remove('active');
                if (view.id === targetView) {
                    view.classList.add('active');
                }
            });
        });
    });

    // Modal Control
    const modal = document.getElementById("contactModal");
    const btn = document.getElementById("contactBtn");
    const close = document.querySelector(".close-modal");

    btn.onclick = () => modal.style.display = "block";
    close.onclick = () => modal.style.display = "none";
    window.onclick = (e) => { if (e.target == modal) modal.style.display = "none"; }
});
