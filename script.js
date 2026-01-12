document.querySelector('.mobile-menu').addEventListener('click', function() {
    document.querySelector('nav').classList.toggle('active');
});

const slides = document.querySelectorAll('.testimonial-slide');
const dots = document.querySelectorAll('.dot');
let currentSlide = 0;

function showSlide(n) {
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    
    currentSlide = (n + slides.length) % slides.length;
    
    slides[currentSlide].classList.add('active');
    dots[currentSlide].classList.add('active');
}

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        showSlide(index);
    });
});

setInterval(() => {
    showSlide(currentSlide + 1);
}, 5000);

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right').forEach(el => {
    observer.observe(el);
});

document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for your message! We will contact you soon.');
    this.reset();
});

function createFloatingIcons() {
    const icons = ['fa-wrench', 'fa-toolbox', 'fa-faucet', 'fa-pipe', 'fa-tint', 'fa-cogs'];
    const hero = document.querySelector('.hero');
    const floatingIcons = document.querySelector('.floating-icons');
    
    for (let i = 0; i < 8; i++) {
        const icon = document.createElement('div');
        icon.className = 'floating-icon';
        icon.innerHTML = `<i class="fas ${icons[Math.floor(Math.random() * icons.length)]}"></i>`;
        
        const top = Math.random() * 90;
        const left = Math.random() * 90;
        const delay = Math.random() * 5;
        const duration = 5 + Math.random() * 5;
        
        icon.style.top = `${top}%`;
        icon.style.left = `${left}%`;
        icon.style.animationDelay = `${delay}s`;
        icon.style.animationDuration = `${duration}s`;
        
        floatingIcons.appendChild(icon);
    }
}

window.addEventListener('DOMContentLoaded', function() {
    createFloatingIcons();
});