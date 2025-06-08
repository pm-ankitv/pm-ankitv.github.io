// Initialize GSAP
gsap.registerPlugin(ScrollTrigger);

// Particle background setup
const initParticles = () => {
    particlesJS('particles-js', {
        particles: {
            number: { value: 80, density: { enable: true, value_area: 800 } },
            color: { value: '#3B82F6' },
            shape: { type: 'circle' },
            opacity: {
                value: 0.5,
                random: false,
                animation: {
                    enable: true,
                    speed: 1,
                    opacity_min: 0.1,
                    sync: false
                }
            },
            size: {
                value: 3,
                random: true,
                animation: {
                    enable: true,
                    speed: 2,
                    size_min: 0.1,
                    sync: false
                }
            },
            line_linked: {
                enable: true,
                distance: 150,
                color: '#3B82F6',
                opacity: 0.4,
                width: 1
            },
            move: {
                enable: true,
                speed: 2,
                direction: 'none',
                random: false,
                straight: false,
                out_mode: 'out',
                bounce: false,
            }
        },
        interactivity: {
            detect_on: 'canvas',
            events: {
                onhover: { enable: true, mode: 'repulse' },
                onclick: { enable: true, mode: 'push' },
                resize: true
            },
            modes: {
                repulse: { distance: 100, duration: 0.4 },
                push: { particles_nb: 4 }
            }
        },
        retina_detect: true
    });
};

// Scroll animations
const initScrollAnimations = () => {
    // Hero section animations
    gsap.from('.hero-content', {
        duration: 1,
        y: 50,
        opacity: 0,
        ease: 'power3.out'
    });

    // Experience cards animation
    gsap.utils.toArray('.experience-card').forEach((card, i) => {
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: 'top bottom-=100',
                toggleActions: 'play none none reverse'
            },
            duration: 0.8,
            y: 50,
            opacity: 0,
            delay: i * 0.2,
            ease: 'power3.out'
        });
    });

    // Skills animation
    gsap.utils.toArray('.skill-item').forEach((skill, i) => {
        gsap.from(skill, {
            scrollTrigger: {
                trigger: skill,
                start: 'top bottom-=50',
                toggleActions: 'play none none reverse'
            },
            duration: 0.6,
            scale: 0.8,
            opacity: 0,
            delay: i * 0.1,
            ease: 'back.out(1.7)'
        });
    });

    // Case studies animation
    gsap.utils.toArray('.case-study-card').forEach((study, i) => {
        gsap.from(study, {
            scrollTrigger: {
                trigger: study,
                start: 'top bottom-=100',
                toggleActions: 'play none none reverse'
            },
            duration: 0.8,
            x: i % 2 === 0 ? -50 : 50,
            opacity: 0,
            ease: 'power3.out'
        });
    });

    // AI experiments animation
    gsap.utils.toArray('.comic-panel').forEach((panel, i) => {
        gsap.from(panel, {
            scrollTrigger: {
                trigger: panel,
                start: 'top bottom-=50',
                toggleActions: 'play none none reverse'
            },
            duration: 0.6,
            scale: 0.8,
            opacity: 0,
            delay: i * 0.1,
            ease: 'back.out(1.7)'
        });
    });
};

// Form validation and submission
const initContactForm = () => {
    const form = document.querySelector('.contact-form');
    if (!form) return;

    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());
        
        try {
            // Add your form submission logic here
            console.log('Form submitted:', data);
            
            // Show success message
            gsap.to('.success-message', {
                duration: 0.5,
                opacity: 1,
                y: 0,
                display: 'block'
            });
            
            form.reset();
        } catch (error) {
            console.error('Error submitting form:', error);
            
            // Show error message
            gsap.to('.error-message', {
                duration: 0.5,
                opacity: 1,
                y: 0,
                display: 'block'
            });
        }
    });
};

// Dark mode toggle
const initDarkMode = () => {
    const darkModeToggle = document.querySelector('.dark-mode-toggle');
    if (!darkModeToggle) return;

    const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    document.documentElement.classList.toggle('dark', isDarkMode);

    darkModeToggle.addEventListener('click', () => {
        document.documentElement.classList.toggle('dark');
    });
};

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    initParticles();
    initScrollAnimations();
    initContactForm();
    initDarkMode();
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            gsap.to(window, {
                duration: 1,
                scrollTo: {
                    y: target,
                    offsetY: 50
                },
                ease: 'power3.inOut'
            });
        }
    });
}); 