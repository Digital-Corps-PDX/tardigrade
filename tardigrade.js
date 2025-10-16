// Tardigrade AI - Interactive Behaviors
// CC0 1.0 - Public Domain

(function() {
  'use strict';
  
  // Initialize all disclosure buttons
  function initDisclosures() {
    const disclosureButtons = document.querySelectorAll('.tardigrade-explain');
    
    disclosureButtons.forEach(button => {
      button.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        
        const disclosure = this.closest('.tardigrade-disclosure');
        const details = disclosure.querySelector('.tardigrade-details');
        const isExpanded = this.getAttribute('aria-expanded') === 'true';
        
        // Close all other open disclosures
        document.querySelectorAll('.tardigrade-disclosure').forEach(d => {
          if (d !== disclosure) {
            const btn = d.querySelector('.tardigrade-explain');
            const det = d.querySelector('.tardigrade-details');
            if (btn && det) {
              btn.setAttribute('aria-expanded', 'false');
              det.hidden = true;
            }
          }
        });
        
        // Toggle current disclosure
        this.setAttribute('aria-expanded', !isExpanded);
        details.hidden = isExpanded;
      });
    });
    
    // Close disclosure when clicking outside
    document.addEventListener('click', function(e) {
      if (!e.target.closest('.tardigrade-disclosure')) {
        document.querySelectorAll('.tardigrade-details').forEach(details => {
          details.hidden = true;
          const button = details.parentElement.querySelector('.tardigrade-explain');
          if (button) {
            button.setAttribute('aria-expanded', 'false');
          }
        });
      }
    });
  }
  
  // Handle contest form submissions
  function initContestForms() {
    const contestForms = document.querySelectorAll('.tardigrade-contest-form');
    
    contestForms.forEach(form => {
      form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Show confirmation
        const button = this.querySelector('button[type="submit"]');
        const originalText = button.textContent;
        button.textContent = 'Request Submitted ✓';
        button.disabled = true;
        
        // Reset after delay (in production, this would be a real submission)
        setTimeout(() => {
          button.textContent = originalText;
          button.disabled = false;
          this.reset();
        }, 2000);
      });
    });
  }
  
  // Initialize human oversight animations
  function initOversightAnimations() {
    const oversightBadges = document.querySelectorAll('.tardigrade-oversight-badge');
    
    oversightBadges.forEach(badge => {
      // Add hover effect
      badge.addEventListener('mouseenter', function() {
        if (this.classList.contains('tardigrade-pending')) {
          this.style.transform = 'scale(1.05)';
        }
      });
      
      badge.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
      });
    });
  }
  
  // Handle override details expansion
  function initOverrideDetails() {
    const overrideDetails = document.querySelectorAll('.tardigrade-override-notice details');
    
    overrideDetails.forEach(details => {
      details.addEventListener('toggle', function() {
        if (this.open) {
          // Smooth expand animation
          const content = this.querySelector('.tardigrade-override-details');
          content.style.opacity = '0';
          setTimeout(() => {
            content.style.transition = 'opacity 0.3s ease';
            content.style.opacity = '1';
          }, 10);
        }
      });
    });
  }
  
  // Utility function to announce changes to screen readers
  function announceToScreenReader(message) {
    const announcement = document.createElement('div');
    announcement.setAttribute('role', 'status');
    announcement.setAttribute('aria-live', 'polite');
    announcement.style.position = 'absolute';
    announcement.style.left = '-10000px';
    announcement.textContent = message;
    
    document.body.appendChild(announcement);
    
    setTimeout(() => {
      document.body.removeChild(announcement);
    }, 1000);
  }
  
  // Initialize all components when DOM is ready
  function init() {
    initDisclosures();
    initContestForms();
    initOversightAnimations();
    initOverrideDetails();
  }
  
  // Wait for DOM to be ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
  
  // Export for use in other scripts if needed
  window.Tardigrade = {
    announceToScreenReader,
    init
  };
})();