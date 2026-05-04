const navItems = document.querySelectorAll('.nav-item');
const views = document.querySelectorAll('.view');

navItems.forEach(item=>{
    item.addEventListener('click',function(e){
        e.preventDefault();
        navItems.forEach(n=>n.classList.remove('active'));
        this.classList.add('active');
        views.forEach(v=>v.classList.remove('active'));
        document.getElementById(this.dataset.view).classList.add('active');
    });
});

// CONTACT MODAL
const modal=document.getElementById('contactModal');
document.getElementById('contactBtn').onclick=()=>modal.style.display='flex';
document.querySelector('.close-modal').onclick=()=>modal.style.display='none';
window.onclick=(e)=>{if(e.target===modal)modal.style.display='none';}

// TYPING EFFECT
const text = "ENGINEERING LEAD • BACKEND ARCHITECT • CLOUD SYSTEMS";
let idx = 0;
function typeWriter(){
    if(idx < text.length){
        document.getElementById('typing').innerHTML += text.charAt(idx);
        idx++;
        setTimeout(typeWriter,70);
    }
}
window.onload = typeWriter;

// CARD REVEAL ON SCROLL
const observer = new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            entry.target.style.opacity = 1;
            entry.target.style.transform = 'translateY(0)';
        }
    });
},{threshold:0.1});

document.querySelectorAll('.card,.stack-item,.bento-card').forEach(el=>{
    el.style.opacity = 0;
    el.style.transform = 'translateY(40px)';
    el.style.transition = 'all .7s ease';
    observer.observe(el);
});