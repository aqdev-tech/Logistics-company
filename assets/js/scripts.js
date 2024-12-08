// Wait for the document to load
document.addEventListener('DOMContentLoaded', () => {
    // Smooth Scroll for Navigation Links on the Same Page
    document.querySelectorAll('nav a').forEach(link => {
      link.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        
        // If the link is an anchor to the same page (starts with #)
        if (href.startsWith('#')) {
          e.preventDefault();
          const targetId = href.substring(1); // Get the target section ID
          const targetElement = document.getElementById(targetId);
  
          if (targetElement) {
            // Smooth scroll to the section, adjusting for header height
            window.scrollTo({
              top: targetElement.offsetTop - 60,
              behavior: 'smooth',
            });
          }
        }
        // Else, it will follow the normal navigation behavior (link to another page)
      });
    });
  
    // Form Validation on Submit (for contact form)
    const form = document.querySelector('form');
    if (form) {
      form.addEventListener('submit', function (e) {
        e.preventDefault();
  
        const name = document.getElementById('name');
        const email = document.getElementById('email');
        const message = document.getElementById('message');
  
        // Check if fields are empty
        if (name.value.trim() === '' || email.value.trim() === '' || message.value.trim() === '') {
          alert('All fields are required!');
          return;
        }
  
        // Validate email format
        if (!validateEmail(email.value)) {
          alert('Please enter a valid email address!');
          return;
        }
  
        // If validation passes
        alert('Message sent successfully!');
        form.reset();  // Reset the form
      });
    }
  
    // Helper Function to Validate Email Format
    function validateEmail(email) {
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return regex.test(email);
    }
  
    // Toggle mobile navigation menu visibility
    const mobileMenuButton = document.querySelector('#mobile-menu-button');
    const mobileMenu = document.querySelector('#mobile-menu');
  
    if (mobileMenuButton && mobileMenu) {
      mobileMenuButton.addEventListener('click', function () {
        mobileMenu.classList.toggle('hidden');
      });
    }
  
    // Image Gallery Modal
    const galleryImages = document.querySelectorAll('.gallery img');
    const modal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    const modalCloseButton = document.getElementById('modalCloseButton');
  
    galleryImages.forEach(image => {
      image.addEventListener('click', function () {
        modal.style.display = 'block';
        modalImage.src = this.src;
      });
    });
  
    // Close the modal
    if (modalCloseButton) {
      modalCloseButton.addEventListener('click', function () {
        modal.style.display = 'none';
      });
    }
  
    // Close the modal if the user clicks outside the image
    if (modal) {
      modal.addEventListener('click', function (e) {
        if (e.target === modal) {
          modal.style.display = 'none';
        }
      });
    }
  });
  