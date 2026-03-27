document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling para los enlaces del menú
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                // Obtener la posición del header fijo
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
                
                // Cerrar menú móvil si está abierto
                const navLinks = document.querySelector('.nav__links');
                if (navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                }
            }
        });
    });
    
    // Manejo del formulario de contacto
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Obtener los valores del formulario
            const formData = new FormData(contactForm);
            const formObject = {};
            formData.forEach((value, key) => {
                formObject[key] = value;
            });
            
            // Aquí iría la lógica para enviar el formulario
            console.log('Formulario enviado:', formObject);
            
            // Mostrar mensaje de éxito
            alert('¡Gracias por tu mensaje! Nos pondremos en contacto contigo pronto.');
            
            // Limpiar el formulario
            contactForm.reset();
        });
    }
    
    // Animación de scroll para las secciones
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.service, .about__content, .video-container, .contact__container');
        
        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementTop < windowHeight - 100) {
                element.classList.add('animate-fade-in');
            }
        });
    };
    
    // Ejecutar la animación al cargar la página y al hacer scroll
    window.addEventListener('load', animateOnScroll);
    window.addEventListener('scroll', animateOnScroll);
    
    // Menú móvil
    const menuToggle = document.createElement('div');
    menuToggle.className = 'menu-toggle';
    menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
    document.querySelector('.nav').appendChild(menuToggle);
    
    menuToggle.addEventListener('click', function() {
        const navLinks = document.querySelector('.nav__links');
        navLinks.classList.toggle('active');
    });
});

// Agregar clase al header al hacer scroll
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});
