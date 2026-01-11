// Scroll animations
function animateOnScroll() {
    const panels = document.querySelectorAll('.content-panel');
    const nodes = document.querySelectorAll('.game-node');
    const triggerBottom = window.innerHeight * 0.75;
    
    panels.forEach(panel => {
        const panelTop = panel.getBoundingClientRect().top;
        if (panelTop < triggerBottom) {
            panel.classList.add('visible');
        }
    });
    
    nodes.forEach(node => {
        const nodeTop = node.getBoundingClientRect().top;
        if (nodeTop < triggerBottom) {
            node.style.opacity = '1';
        }
    });
}

// Node click interactions
document.querySelectorAll('.game-node').forEach(node => {
    node.addEventListener('click', function() {
        const label = this.querySelector('.node-label').textContent;
        let message = '';
        
        if (label === 'START') message = '🎯 Welcome to REACT.gg! Your React journey begins here.';
        else if (label === '01') message = '📚 Level 1: Mastering React Components & Fundamentals';
        else if (label === '02') message = '💻 Level 2: Interactive Coding Practice & Challenges';
        else if (label === '03') message = '🎬 Level 3: Engaging Video Tutorials';
        else if (label === '04') message = '🪝 Level 4: Custom Hooks & Advanced Patterns';
        else if (label === '05') message = '🚀 Level 5: Building Real-World Projects';
        else if (label === '06') message = '⚡ Level 6: State Management Mastery';
        else if (label === '07') message = '💼 Level 7: Interview Preparation';
        else if (label === '08') message = '🧩 Level 8: Advanced React Patterns';
        else if (label === '09') message = '🔮 Level 9: Future React & Next.js';
        else if (label === '10') message = '🔥 Level 10: Next.js & Full Stack Development';
        else if (label === '11') message = '🎯 Level 11: Career Development & Job Support';
        
        alert(message);
    });
});

// Button interactions
document.querySelector('.header-cta').addEventListener('click', function() {
    this.innerHTML = 'Starting...';
    setTimeout(() => {
        alert('Welcome to REACT.gg! Your interactive learning journey begins now.');
        this.innerHTML = 'Start Learning';
    }, 1000);
});

// Video preview click
document.querySelector('.video-preview').addEventListener('click', function() {
    alert('🎬 Starting video tutorial: "Mastering React Hooks in 30 Minutes"');
});

// Smooth scrolling for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 100,
                behavior: 'smooth'
            });
        }
    });
});

// Initialize animations
window.addEventListener('scroll', animateOnScroll);
animateOnScroll();

// Fix for scroll issues
window.addEventListener('load', function() {
    // Force a reflow to fix any positioning issues
    document.body.style.display = 'none';
    document.body.offsetHeight; // Trigger reflow
    document.body.style.display = '';
    
    // Scroll to top on load
    window.scrollTo(0, 0);
});