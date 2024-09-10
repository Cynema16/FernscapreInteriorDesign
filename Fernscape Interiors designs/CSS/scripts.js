document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('a');

    links.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();

            const href = this.getAttribute('href');

            document.body.classList.add('fade-out');

            setTimeout(function() {
                window.location.href = href;
            }, 500);
        });
    });
});


// Automatically advance the carousel every 3 seconds (3000 milliseconds)
var carouselInterval = setInterval(function() {
    $('#carouselExampleFade').carousel('next'); // Move to the next slide
  }, 3000);
  
  // Pause the carousel when the mouse hovers over it
  $('#carouselExampleFade').hover(function() {
    clearInterval(carouselInterval); // Stop the automatic scrolling
  }, function() {
    // Resume automatic scrolling when the mouse leaves the carousel
    carouselInterval = setInterval(function() {
      $('#carouselExampleFade').carousel('next'); // Move to the next slide
    }, 3000);
  });
  

  document.addEventListener('DOMContentLoaded', function() {
    const subscribeForm = document.getElementById('subscribeForm');
  
    if (subscribeForm) {
      subscribeForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission behavior
  
        // Get email input value
        const emailInput = document.getElementById('emailInput').value;
  
        // You can perform additional validation here before redirecting
        if (emailInput) {
          // Redirect to 'thankyou.html' upon successful form submission
          window.location.href = 'thankyou.html';
        }
      });
    }
  });