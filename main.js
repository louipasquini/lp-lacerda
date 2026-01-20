// Main JavaScript file

document.addEventListener('DOMContentLoaded', () => {
    console.log('LacerdaTEAM Landing Page Loaded');

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Set blurred background for cards
    const cardImages = document.querySelectorAll('.card-image');
    cardImages.forEach(container => {
        const img = container.querySelector('img');
        if (img) {
            // Create background element
            const bg = document.createElement('div');
            bg.classList.add('card-image-bg');
            bg.style.backgroundImage = `url(${img.src})`;

            // Insert before the image
            container.insertBefore(bg, img);
        }
    });

    // 3D Tilt Effect for Cards
    const cards = document.querySelectorAll('.card[data-tilt]');

    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const cardRect = card.getBoundingClientRect();
            const cardWidth = cardRect.width;
            const cardHeight = cardRect.height;
            const centerX = cardRect.left + cardWidth / 2;
            const centerY = cardRect.top + cardHeight / 2;
            const mouseX = e.clientX - centerX;
            const mouseY = e.clientY - centerY;

            const rotateX = (mouseY / cardHeight / 2) * -20; // Max rotation deg
            const rotateY = (mouseX / cardWidth / 2) * 20;

            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
        });
    });
});

// FAQ Accordion
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    if (question) {
        question.addEventListener('click', () => {
            // Close other items
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                }
            });
            // Toggle current item
            item.classList.toggle('active');
        });
    }
});

