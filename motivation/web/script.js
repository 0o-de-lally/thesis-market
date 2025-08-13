// Thesis-Market Mockup JavaScript
// Simple interactions for demo purposes (Updated for Tailwind CSS)

document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Animate forecast probability on scroll
    const forecastCard = document.querySelector('.forecast-card');
    const probabilityValue = document.querySelector('.probability-value');
    
    if (forecastCard && probabilityValue) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateNumber(probabilityValue, 0, 72, 1500);
                }
            });
        }, { threshold: 0.5 });
        
        observer.observe(forecastCard);
    }

    // Animate reputation stats
    const stats = document.querySelectorAll('.stat-value');
    
    stats.forEach((stat, index) => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    if (index === 0) {
                        animateDecimal(stat, 0, 0.18, 1000);
                    } else if (index === 1) {
                        animateNumber(stat, 0, 94, 1200);
                    } else if (index === 2) {
                        animateDecimal(stat, 0, 8.4, 1100);
                    }
                }
            });
        }, { threshold: 0.5 });
        
        observer.observe(stat);
    });

    // Animate progress bar
    const progressBar = document.querySelector('.progress-fill');
    if (progressBar) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        progressBar.style.width = '80%';
                        progressBar.style.transition = 'width 1.5s ease-out';
                    }, 500);
                }
            });
        }, { threshold: 0.5 });
        
        observer.observe(progressBar);
    }

    // Add click handlers for CTA buttons
    const ctaButtons = document.querySelectorAll('button');
    ctaButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            // For demo purposes, just show an alert
            if (this.textContent.includes('Waitlist') || this.textContent.includes('Access')) {
                e.preventDefault();
                showNotification('Thanks for your interest! You\'ll be added to our exclusive waitlist.');
            } else if (this.textContent.includes('Sample')) {
                e.preventDefault();
                showNotification('Sample thesis view coming soon in our alpha release!');
            }
        });
    });

    // Add fade-in animation for sections on scroll
    const sections = document.querySelectorAll('section');
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-in');
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        section.classList.add('opacity-0', 'translate-y-5');
        sectionObserver.observe(section);
    });
});

// Helper function to animate numbers
function animateNumber(element, start, end, duration, suffix = '') {
    const startTime = Date.now();
    const range = end - start;
    
    function updateNumber() {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const current = Math.floor(start + (range * easeOutQuart(progress)));
        element.textContent = current + suffix;
        
        if (progress < 1) {
            requestAnimationFrame(updateNumber);
        }
    }
    
    updateNumber();
}

// Helper function to animate decimal numbers
function animateDecimal(element, start, end, duration) {
    const startTime = Date.now();
    const range = end - start;
    
    function updateNumber() {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const current = start + (range * easeOutQuart(progress));
        element.textContent = current.toFixed(2);
        
        if (progress < 1) {
            requestAnimationFrame(updateNumber);
        }
    }
    
    updateNumber();
}

// Easing function for smooth animations
function easeOutQuart(t) {
    return 1 - (--t) * t * t * t;
}

// Simple notification system
function showNotification(message) {
    // Remove existing notification if any
    const existing = document.querySelector('.notification');
    if (existing) {
        existing.remove();
    }
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = 'notification fixed top-24 right-6 bg-primary-500 text-white px-6 py-4 rounded-lg shadow-lg z-50 text-sm font-semibold max-w-sm transform translate-x-full transition-transform duration-300';
    notification.textContent = message;
    
    // Add to page
    document.body.appendChild(notification);
    
    // Animate in
    requestAnimationFrame(() => {
        notification.classList.remove('translate-x-full');
        notification.classList.add('translate-x-0');
    });
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.classList.remove('translate-x-0');
        notification.classList.add('translate-x-full');
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 3000);
}

// Add custom CSS for fade-in animation
const style = document.createElement('style');
style.textContent = `
    .animate-fade-in {
        animation: fadeInUp 0.6s ease forwards;
    }
    
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);

// Helper function to animate numbers
function animateNumber(element, start, end, duration, suffix = '') {
    const startTime = Date.now();
    const range = end - start;
    
    function updateNumber() {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const current = Math.floor(start + (range * easeOutQuart(progress)));
        element.textContent = current + suffix;
        
        if (progress < 1) {
            requestAnimationFrame(updateNumber);
        }
    }
    
    updateNumber();
}

// Helper function to animate decimal numbers
function animateDecimal(element, start, end, duration) {
    const startTime = Date.now();
    const range = end - start;
    
    function updateNumber() {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const current = start + (range * easeOutQuart(progress));
        element.textContent = current.toFixed(2);
        
        if (progress < 1) {
            requestAnimationFrame(updateNumber);
        }
    }
    
    updateNumber();
}

// Easing function for smooth animations
function easeOutQuart(t) {
    return 1 - (--t) * t * t * t;
}

// Simple notification system
function showNotification(message) {
    // Remove existing notification if any
    const existing = document.querySelector('.notification');
    if (existing) {
        existing.remove();
    }
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    
    // Style the notification
    Object.assign(notification.style, {
        position: 'fixed',
        top: '100px',
        right: '24px',
        background: 'var(--primary-color)',
        color: 'white',
        padding: '16px 24px',
        borderRadius: '8px',
        boxShadow: 'var(--shadow-lg)',
        zIndex: '10000',
        fontSize: '14px',
        fontWeight: '600',
        maxWidth: '320px',
        transform: 'translateX(100%)',
        transition: 'transform 0.3s ease'
    });
    
    // Add to page
    document.body.appendChild(notification);
    
    // Animate in
    requestAnimationFrame(() => {
        notification.style.transform = 'translateX(0)';
    });
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 3000);
}

// Add some interactive forecast updates (demo purposes)
function simulateForecastUpdate() {
    const probabilityValue = document.querySelector('.probability-value');
    if (probabilityValue) {
        const currentValue = parseInt(probabilityValue.textContent);
        const newValue = currentValue + (Math.random() > 0.5 ? 1 : -1);
        const clampedValue = Math.max(1, Math.min(99, newValue));
        
        probabilityValue.style.transition = 'all 0.3s ease';
        probabilityValue.textContent = clampedValue + '%';
        
        // Add a subtle color flash
        probabilityValue.style.color = 'var(--warning-color)';
        setTimeout(() => {
            probabilityValue.style.color = 'var(--accent-color)';
        }, 300);
    }
}

// Simulate forecast updates every 5 seconds (for demo)
// setInterval(simulateForecastUpdate, 5000);
