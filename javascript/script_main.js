       // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });
        
        // Header background change on scroll
        window.addEventListener('scroll', function() {
            const header = document.querySelector('header');
            if (window.scrollY > 50) {
                header.style.background = 'rgba(15, 23, 42, 0.95)';
                header.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.5)';
            } else {
                header.style.background = 'rgba(0, 0, 0, 0.7)';
                header.style.boxShadow = '0 2px 15px rgba(0, 0, 0, 0.4)';
            }
        });
        
        // Floating animation for app cards
        const appCards = document.querySelectorAll('.app-card');
        appCards.forEach((card, index) => {
            card.style.animationDelay = `${index * 0.2}s`;
        });