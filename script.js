// Smooth scrolling pour les liens de navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Animation au scroll pour les éléments
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observer tous les éléments avec animation
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.skill-category, .service-card, .contact-method');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Effet parallaxe léger sur le hero background
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroBackground = document.querySelector('.hero-background');
    if (heroBackground) {
        heroBackground.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// Navbar transparent/solide au scroll
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.boxShadow = 'none';
    }
    
    lastScroll = currentScroll;
});

// Animation des floating cards
document.querySelectorAll('.floating-card').forEach((card, index) => {
    card.style.animationDelay = `${index * 0.5}s`;
});

// Gestionnaire de formulaire
const formInputs = document.querySelectorAll('.form-input, .form-textarea');

formInputs.forEach(input => {
    input.addEventListener('focus', function() {
        this.parentElement.style.transform = 'scale(1.02)';
        this.parentElement.style.transition = 'transform 0.3s ease';
    });
    
    input.addEventListener('blur', function() {
        this.parentElement.style.transform = 'scale(1)';
    });
});

// Click sur le bouton d'envoi
document.querySelector('.btn-full')?.addEventListener('click', function(e) {
    e.preventDefault();
    
    // Récupérer les valeurs
    const inputs = document.querySelectorAll('.form-input');
    const textarea = document.querySelector('.form-textarea');
    
    let allFilled = true;
    inputs.forEach(input => {
        if (!input.value.trim()) {
            allFilled = false;
            input.style.borderColor = '#EF4444';
        } else {
            input.style.borderColor = 'var(--color-border)';
        }
    });
    
    if (!textarea.value.trim()) {
        allFilled = false;
        textarea.style.borderColor = '#EF4444';
    } else {
        textarea.style.borderColor = 'var(--color-border)';
    }
    
    if (allFilled) {
        // Animation de succès
        this.innerHTML = '✓ Message Envoyé !';
        this.style.background = '#10B981';
        
        // Réinitialiser après 3 secondes
        setTimeout(() => {
            this.innerHTML = 'Envoyer le Message';
            this.style.background = 'var(--color-secondary)';
            inputs.forEach(input => input.value = '');
            textarea.value = '';
        }, 3000);
    }
});

// Compteur animé pour les statistiques (si vous voulez l'ajouter plus tard)
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    
    const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(start);
        }
    }, 16);
}

// Effet de typing pour le titre (optionnel)
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.textContent = '';
    
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Easter egg - Clic sur le logo
let clickCount = 0;
document.querySelector('.nav-brand')?.addEventListener('click', function() {
    clickCount++;
    if (clickCount === 5) {
        this.style.transform = 'rotate(360deg)';
        this.style.transition = 'transform 1s ease';
        setTimeout(() => {
            this.style.transform = 'rotate(0deg)';
            clickCount = 0;
        }, 1000);
    }
});

console.log('Portfolio chargé avec succès ! 🚀');

