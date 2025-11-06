// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Scroll reveal animation
function revealOnScroll() {
    const reveals = document.querySelectorAll('.reveal');
    reveals.forEach(reveal => {
        const windowHeight = window.innerHeight;
        const elementTop = reveal.getBoundingClientRect().top;
        const elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            reveal.classList.add('active');
        }
    });
}

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

// Add reveal class to sections
document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section:not(#hero)');
    sections.forEach(section => {
        section.classList.add('reveal');
    });

    const services = document.querySelectorAll('.service');
    services.forEach((service, index) => {
        service.style.animationDelay = `${index * 0.1}s`;
        service.classList.add('reveal');
    });

    const projects = document.querySelectorAll('.project');
    projects.forEach((project, index) => {
        project.style.animationDelay = `${index * 0.1}s`;
        project.classList.add('reveal');
    });

    const testimonials = document.querySelectorAll('.testimonial');
    testimonials.forEach((testimonial, index) => {
        testimonial.style.animationDelay = `${index * 0.1}s`;
        testimonial.classList.add('reveal');
    });
});

// Parallax effect for laptop mockup
window.addEventListener('scroll', () => {
    const laptop = document.querySelector('.laptop-mockup');
    if (laptop) {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        laptop.style.transform = `translateY(${rate}px)`;
    }
});

// Button hover effects
document.querySelectorAll('.cta-button').forEach(button => {
    button.addEventListener('mouseenter', () => {
        button.style.transform = 'translateY(-3px) scale(1.05)';
    });

    button.addEventListener('mouseleave', () => {
        button.style.transform = 'translateY(0) scale(1)';
    });
});

// Header scroll effect
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.background = 'rgba(10, 10, 10, 0.98)';
        header.style.backdropFilter = 'blur(20px)';
    } else {
        header.style.background = 'rgba(10, 10, 10, 0.95)';
        header.style.backdropFilter = 'blur(10px)';
    }
});

// Mobile menu toggle (if needed for very small screens)
const navUl = document.querySelector('nav ul');
let isMenuOpen = false;

function toggleMenu() {
    isMenuOpen = !isMenuOpen;
    if (isMenuOpen) {
        navUl.classList.add('active');
    } else {
        navUl.classList.remove('active');
    }
}

// Add click event to logo for mobile menu (if needed)
document.querySelector('.logo').addEventListener('click', function() {
    if (window.innerWidth <= 480) {
        toggleMenu();
    }
});

// Contact form submission with EmailJS
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Animate form submission
    const button = this.querySelector('.cta-button');
    const originalText = button.textContent;
    button.textContent = 'Sending...';
    button.style.background = 'linear-gradient(135deg, #00bfff, #ffd700)';

    // EmailJS configuration
    const serviceID = 'default_service'; // Replace with your EmailJS service ID
    const templateID = 'template_contact'; // Replace with your EmailJS template ID
    const publicKey = 'your_public_key'; // Replace with your EmailJS public key

    const templateParams = {
        from_name: name,
        from_email: email,
        message: message,
        to_email: 'brunocoder13@gmail.com'
    };

    emailjs.send(serviceID, templateID, templateParams, publicKey)
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            const responseDiv = document.getElementById('form-response');
            responseDiv.innerHTML = '<p style="color: #ffd700; font-weight: 600;">Thank you for your message! I\'ll get back to you soon.</p>';

            // Reset button
            button.textContent = originalText;
            button.style.background = 'linear-gradient(135deg, #ffd700, #ffed4e)';

            // Clear the form
            document.getElementById('contact-form').reset();

            // Animate response
            responseDiv.style.animation = 'fadeInUp 0.5s ease-out';
        }, function(error) {
            console.log('FAILED...', error);
            const responseDiv = document.getElementById('form-response');
            responseDiv.innerHTML = '<p style="color: #ff4444; font-weight: 600;">Sorry, there was an error sending your message. Please try again.</p>';

            // Reset button
            button.textContent = originalText;
            button.style.background = 'linear-gradient(135deg, #ffd700, #ffed4e)';

            // Animate response
            responseDiv.style.animation = 'fadeInUp 0.5s ease-out';
        });
});

// Add loading animation on page load
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// Intersection Observer for more advanced scroll animations
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

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll('.service, .project, .testimonial');
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(50px)';
        el.style.transition = 'all 0.6s ease';
        observer.observe(el);
    });
});

