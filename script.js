// GSAP Registration
gsap.registerPlugin(ScrollTrigger);

// ===========================
// Loading Screen
// ===========================
window.addEventListener('load', () => {
    const loadingScreen = document.getElementById('loading-screen');
    
    setTimeout(() => {
        gsap.to(loadingScreen, {
            opacity: 0,
            duration: 0.6,
            ease: 'power2.inOut',
            onComplete: () => {
                loadingScreen.style.display = 'none';
            }
        });
    }, 2400);
});

// ===========================
// Navigation Scroll Effect
// ===========================
const navbar = document.getElementById('navbar');
let lastScrollTop = 0;

window.addEventListener('scroll', () => {
    let currentScroll = window.scrollY;
    
    if (currentScroll > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
});

// ===========================
// Mobile Menu Toggle
// ===========================
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

// Close mobile menu on link click
document.querySelectorAll('#mobile-menu a').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
    });
});

// ===========================
// Smooth Scroll for Anchor Links
// ===========================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ===========================
// Scroll-Based Animations
// ===========================

// Animate stat cards
const counters = document.querySelectorAll('.counter');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const counter = entry.target;
            const target = parseInt(counter.getAttribute('data-target'));
            animateCounter(counter, target);
            observer.unobserve(counter);
        }
    });
}, { threshold: 0.5 });

counters.forEach(counter => observer.observe(counter));

function animateCounter(element, target) {
    const increment = target / 30;
    let current = 0;

    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 50);
}

// Scroll reveal animations for sections
gsap.utils.toArray('section').forEach(section => {
    gsap.to(section, {
        scrollTrigger: {
            trigger: section,
            start: 'top center+=100',
            end: 'center center',
            markers: false,
            onEnter: () => {
                gsap.to(section, { opacity: 1, y: 0, duration: 0.6 });
            }
        }
    });
});

// Skill cards stagger animation
gsap.to('.skill-card', {
    scrollTrigger: {
        trigger: '#skills',
        start: 'top center+=100',
        toggleActions: 'play none none none'
    },
    opacity: 1,
    y: 0,
    stagger: 0.1,
    duration: 0.6
});

// Project cards parallax effect
gsap.to('.project-card', {
    scrollTrigger: {
        trigger: '#projects',
        start: 'top center+=100',
        toggleActions: 'play none none none'
    },
    opacity: 1,
    y: 0,
    stagger: 0.15,
    duration: 0.6
});

// ===========================
// Mouse Parallax Effect
// ===========================
document.addEventListener('mousemove', (e) => {
    const blobs = document.querySelectorAll('.floating-blob');
    const mouseX = e.clientX / window.innerWidth;
    const mouseY = e.clientY / window.innerHeight;

    blobs.forEach((blob, index) => {
        const speed = (index + 1) * 20;
        gsap.to(blob, {
            x: mouseX * speed,
            y: mouseY * speed,
            duration: 0.5,
            ease: 'power2.out'
        });
    });
});

// ===========================
// Form Submission
// ===========================
const contactForm = document.getElementById('contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Get form data
        const formInputs = contactForm.querySelectorAll('input, textarea');
        const name = formInputs[0].value;
        const email = formInputs[1].value;
        const subject = formInputs[2].value;
        const message = formInputs[3].value;

        // Validate form
        if (!name || !email || !subject || !message) {
            alert('Please fill in all fields');
            return;
        }

        // Create mailto link
        const mailtoLink = `mailto:jonathan.odoh.dev@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;
        
        // Open email client
        window.location.href = mailtoLink;

        // Show success message
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        
        gsap.to(submitBtn, {
            opacity: 0.7,
            duration: 0.3,
            onComplete: () => {
                submitBtn.textContent = 'Message Sent! ✓';
                submitBtn.disabled = true;
                setTimeout(() => {
                    gsap.to(submitBtn, {
                        opacity: 1,
                        duration: 0.3,
                        onComplete: () => {
                            submitBtn.textContent = originalText;
                            submitBtn.disabled = false;
                        }
                    });
                }, 2000);
            }
        });

        // Reset form
        setTimeout(() => {
            contactForm.reset();
        }, 500);
    });
}

// ===========================
// Hover Effects for Interactive Elements
// ===========================

// Hover effects for buttons
document.querySelectorAll('a[class*="px-8"][class*="py-3"], button[type="submit"]').forEach(button => {
    button.addEventListener('mouseenter', function() {
        gsap.to(this, {
            scale: 1.05,
            duration: 0.3,
            overwrite: 'auto'
        });
    });

    button.addEventListener('mouseleave', function() {
        gsap.to(this, {
            scale: 1,
            duration: 0.3,
            overwrite: 'auto'
        });
    });
});

// Project card hover effect
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        gsap.to(this, {
            y: -10,
            duration: 0.3,
            overwrite: 'auto'
        });
    });

    card.addEventListener('mouseleave', function() {
        gsap.to(this, {
            y: 0,
            duration: 0.3,
            overwrite: 'auto'
        });
    });
});

// Skill card hover effect
document.querySelectorAll('.skill-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        gsap.to(this, {
            y: -8,
            duration: 0.3,
            overwrite: 'auto'
        });
    });

    card.addEventListener('mouseleave', function() {
        gsap.to(this, {
            y: 0,
            duration: 0.3,
            overwrite: 'auto'
        });
    });
});

// ===========================
// Intersection Observer for Lazy Loading
// ===========================
const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.style.opacity = '1';
            observer.unobserve(img);
        }
    });
});

document.querySelectorAll('img').forEach(img => imageObserver.observe(img));

// ===========================
// Keyboard Navigation
// ===========================
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        const mobileMenu = document.getElementById('mobile-menu');
        if (!mobileMenu.classList.contains('hidden')) {
            mobileMenu.classList.add('hidden');
        }
    }
});

// ===========================
// Initialize animations on page load
// ===========================
window.addEventListener('DOMContentLoaded', () => {
    // Fade in all elements with animation classes
    gsap.from('.hero-content', {
        opacity: 0,
        y: 30,
        duration: 1,
        ease: 'power3.out',
        delay: 0.5
    });
});

// ===========================
// Scroll-to-top button
// ===========================
let scrollToTopBtn = document.createElement('button');
scrollToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
scrollToTopBtn.id = 'scroll-to-top';
scrollToTopBtn.style.cssText = `
    position: fixed;
    bottom: 30px;
    right: 30px;
    width: 50px;
    height: 50px;
    background: linear-gradient(135deg, #3b82f6, #ec4899);
    border: none;
    border-radius: 50%;
    color: white;
    cursor: pointer;
    opacity: 0;
    pointer-events: none;
    z-index: 99;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.2rem;
    box-shadow: 0 0 20px rgba(168, 85, 247, 0.3);
`;

document.body.appendChild(scrollToTopBtn);

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollToTopBtn.style.opacity = '1';
        scrollToTopBtn.style.pointerEvents = 'auto';
    } else {
        scrollToTopBtn.style.opacity = '0';
        scrollToTopBtn.style.pointerEvents = 'none';
    }
});

scrollToTopBtn.addEventListener('click', () => {
    gsap.to(window, {
        scrollTo: 0,
        duration: 1,
        ease: 'power3.inOut'
    });
});

// ===========================
// Performance optimization - Debounce function
// ===========================
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// ===========================
// Accessibility improvements
// ===========================
document.querySelectorAll('a, button').forEach(element => {
    element.addEventListener('focus', function() {
        this.style.outline = '2px solid #a78bfa';
        this.style.outlineOffset = '2px';
    });

    element.addEventListener('blur', function() {
        this.style.outline = 'none';
    });
});

console.log('Portfolio initialized successfully! 🚀');