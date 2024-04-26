

document.addEventListener('DOMContentLoaded', function() {
    // Your JavaScript code here
    // Array of random quotes
var quotes = [
     "In the silence of nature, wildlife photography speaks volumes, capturing the whispers of life echoing through untamed landscapes.",   
     "Through the lens of a wildlife photographer, we witness the untold stories of the wild, where every click of the shutter is a testament to the beauty and resilience of our natural world.",    
    "Wildlife photography isn't just about capturing images; it's about immortalizing moments that remind us of our connection to the earth and the importance of preserving its precious biodiversity.",    
    "In the heart of the wilderness, amidst the symphony of nature's chorus, wildlife photography unveils the extraordinary in the ordinary, revealing the magic that surrounds us.",
    "Behind every captivating wildlife photograph lies a story of patience, passion, and a deep reverence for the wonders of our planet, inviting us to pause, reflect, and marvel at the intricacies of life."
  ];
  
  // Function to display a random quote
  function displayRandomQuote() {
    var randomNumber = Math.floor(Math.random() * quotes.length);
    document.getElementById('quoteContainer').innerHTML = '<p>' + quotes[randomNumber] + '</p>';
  }
  
  // Display initial quote
  displayRandomQuote();
  
  // Change quote every 5 seconds
  setInterval(displayRandomQuote, 3000);
});

$(document).ready(function(){
    // Smooth scroll to anchor links
    $("a").on('click', function(event) {
      if (this.hash !== "") {
        event.preventDefault();
        var hash = this.hash;
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
          window.location.hash = hash;
        });
      }
    });
});

