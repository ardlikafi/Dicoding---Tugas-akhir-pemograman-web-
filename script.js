document.addEventListener('DOMContentLoaded', function() {
    // Select all anchor links with a hash (#) in the href
    const navLinks = document.querySelectorAll('nav a[href^="#"]');

    // Add click event listener for each link
    navLinks.forEach(link => {
      link.addEventListener('click', function(event) {
        // Prevent default link behavior (jumping to section)
        event.preventDefault();

        // Get the target section id from the href attribute
        const targetId = this.getAttribute('href');
        // Find the target element by ID
        const targetElement = document.querySelector(targetId);

        // Check if target element exists
        if (targetElement) {
          // Scroll to the target element with smooth animation
          targetElement.scrollIntoView({
            behavior: 'smooth'
          });
        }
      });
    });
  });