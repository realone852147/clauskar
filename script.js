// Simple interaction script

document.addEventListener('DOMContentLoaded', () => {
    // Reveal animations on scroll
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Add scroll reveal to feature cards
    const cards = document.querySelectorAll('.feature-card');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = `all 0.6s ease ${index * 0.1}s`;
        observer.observe(card);
    });

    // Parallax effect for blobs
    document.addEventListener('mousemove', (e) => {
        const mouseX = e.clientX / window.innerWidth;
        const mouseY = e.clientY / window.innerHeight;

        const blob1 = document.querySelector('.blob-1');
        const blob2 = document.querySelector('.blob-2');

        if(blob1) {
            blob1.style.transform = `translate(${mouseX * -30}px, ${mouseY * -30}px)`;
        }
        if(blob2) {
            blob2.style.transform = `translate(${mouseX * 30}px, ${mouseY * 30}px)`;
        }
    });

    // Navbar blur effect on scroll
    const nav = document.querySelector('.nav-glass');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            nav.style.background = 'rgba(10, 10, 10, 0.9)';
            nav.style.boxShadow = '0 20px 40px -10px rgba(0,0,0,0.8)';
        } else {
            nav.style.background = 'rgba(10, 10, 10, 0.7)';
            nav.style.boxShadow = '0 10px 40px -10px rgba(0,0,0,0.5)';
        }
    });
});
