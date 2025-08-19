
        // Slider functionality
        document.addEventListener('DOMContentLoaded', function() {
            // Slider variables
            const slides = document.querySelectorAll('.slide');
            const dots = document.querySelectorAll('.dot');
            const prevBtn = document.querySelector('.prev');
            const nextBtn = document.querySelector('.next');
            let currentSlide = 0;
            let slideInterval;
            
            // Function to show a specific slide
            function showSlide(index) {
                // Hide all slides
                slides.forEach(slide => {
                    slide.style.opacity = '0';
                    slide.classList.remove('active');
                });
                
                // Remove active class from all dots
                dots.forEach(dot => dot.classList.remove('active'));
                
                // Show the selected slide
                slides[index].style.opacity = '1';
                slides[index].classList.add('active');
                
                // Set active dot
                dots[index].classList.add('active');
                
                // Update current slide
                currentSlide = index;
            }
            
            // Function to show next slide
            function nextSlide() {
                let nextIndex = (currentSlide + 1) % slides.length;
                showSlide(nextIndex);
            }
            
            // Function to show previous slide
            function prevSlide() {
                let prevIndex = (currentSlide - 1 + slides.length) % slides.length;
                showSlide(prevIndex);
            }
            
            // Start the slider
            function startSlider() {
                slideInterval = setInterval(nextSlide, 5000);
            }
            
            // Stop the slider
            function stopSlider() {
                clearInterval(slideInterval);
            }
            
            // Event listeners
            prevBtn.addEventListener('click', function() {
                stopSlider();
                prevSlide();
                startSlider();
            });
            
            nextBtn.addEventListener('click', function() {
                stopSlider();
                nextSlide();
                startSlider();
            });
            
            // Dot click event
            dots.forEach((dot, index) => {
                dot.addEventListener('click', function() {
                    stopSlider();
                    showSlide(index);
                    startSlider();
                });
            });
            
            // Initialize slider
            showSlide(currentSlide);
            startSlider();
            
            // Smooth scrolling for navigation links
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function(e) {
                    e.preventDefault();
                    
                    const target = document.querySelector(this.getAttribute('href'));
                    if (target) {
                        target.scrollIntoView({
                            behavior: 'smooth'
                        });
                    }
                });
            });
            
            // Header background change on scroll
            window.addEventListener('scroll', function() {
                const header = document.querySelector('header');
                if (window.scrollY > 50) {
                    header.style.background = 'rgba(0, 0, 0, 0.9)';
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
        });
