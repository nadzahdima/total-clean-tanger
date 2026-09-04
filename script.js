// Smooth scrolling for navigation links
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

// Form submission
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const service = document.getElementById('service').value;
    const date = document.getElementById('date').value;
    const message = document.getElementById('message').value;
    
    // Validate form
    if (!name || !email || !phone || !service || !date) {
        alert('Please fill in all required fields');
        return;
    }
    
    // Create mailto link
    const mailtoLink = `mailto:totalcleantanger@gmail.com?subject=Cleaning Service Request from ${name}&body=Name: ${name}%0DEmail: ${email}%0DPhone: ${phone}%0DService: ${service}%0DPreferred Date: ${date}%0DMessage: ${message}`;
    
    // Open email client
    window.location.href = mailtoLink;
    
    // Show success message
    alert('Thank you for your request! We will contact you shortly.');
    
    // Reset form
    this.reset();
});

// Highlight active navigation link
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// Add animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe service cards and other elements
document.querySelectorAll('.service-card, .price-card, .testimonial-card, .gallery-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(el);
});

// Mobile menu toggle (if needed in future)
const toggleMobileMenu = () => {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
};

// Handle window resize
window.addEventListener('resize', function() {
    // Handle responsive behavior if needed
});

// Booking button functionality
document.querySelectorAll('.features-list').forEach(list => {
    const buttons = list.parentElement.querySelector('button');
    if (buttons) {
        buttons.addEventListener('click', function() {
            const pricing = this.parentElement;
            const plan = pricing.querySelector('h3').textContent;
            
            // Scroll to contact form
            document.getElementById('contact').scrollIntoView({behavior: 'smooth'});
            
            // Pre-fill service if possible
            setTimeout(() => {
                console.log('Plan selected: ' + plan);
            }, 500);
        });
    }
});

// Add current year to footer
document.addEventListener('DOMContentLoaded', function() {
    const year = new Date().getFullYear();
    const footerText = document.querySelector('.footer p');
    if (footerText && !footerText.textContent.includes('2024')) {
        footerText.textContent = `© ${year} Total Clean Tanger. All rights reserved. | Professional Cleaning Services`;
    }
});

// WhatsApp integration (optional)
const whatsappNumber = '212602424130'; // Phone number with country code

function openWhatsApp(message = 'Hello, I am interested in your cleaning services.') {
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
}

// Add smooth transition for page load
window.addEventListener('load', function() {
    document.body.style.opacity = '1';
});

document.body.style.opacity = '0';
document.body.style.transition = 'opacity 0.5s ease';

// Lazy load images (if images are added later)
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => imageObserver.observe(img));
}

// Add active state to navigation on click
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function() {
        document.querySelectorAll('.nav-links a').forEach(l => l.style.color = 'white');
        this.style.color = '#2ecc71';
    });
});

console.log('Total Clean Tanger website loaded successfully!');
