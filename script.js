// script.js
// Toggle Menu Function
function toggleMenu() {
    const navbar = document.getElementById('navbar');
    navbar.classList.toggle('active');
  }
  
  // Modal Functionality
  document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');
    const modal = document.getElementById('thankYouModal');
    const closeButton = document.querySelector('.close-button');
  
    // When the user submits the form
    contactForm.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent the default form submission
  
      // You can add form validation or AJAX submission here if needed
  
      // Show the modal
      modal.style.display = 'block';
  
      // Optionally, reset the form
      contactForm.reset();
    });
  
    // When the user clicks on <span> (x), close the modal
    closeButton.addEventListener('click', () => {
      modal.style.display = 'none';
    });
  
    // When the user clicks anywhere outside of the modal, close it
    window.addEventListener('click', (event) => {
      if (event.target == modal) {
        modal.style.display = 'none';
      }
    });
  });
  
// Audio
const audio = document.querySelector('audio'); // Select the audio element
const playPauseBtn = document.getElementById('playPauseBtn'); // Select the Play/Pause button

playPauseBtn.addEventListener('click', () => {
    if (audio.paused) {
        audio.play();
        playPauseBtn.textContent = 'Pause';
    } else {
        audio.pause();
        playPauseBtn.textContent = 'Play';
    }
});

function toggleMenu() {
    var navbar = document.getElementById('navbar');
    navbar.classList.toggle('active');
} 

document.querySelector('button[type="submit"]').addEventListener('click', function (event) {
  event.preventDefault(); // Prevent form submission

  // Get the input value
  const query = document.getElementById('searchInput').value.toLowerCase();

  // Example: Filter elements or search within page content
  const articles = document.querySelectorAll('.article-card');
  
  articles.forEach((article) => {
    const title = article.querySelector('.article-title').textContent.toLowerCase();
    if (title.includes(query)) {
      article.style.display = 'block'; // Show the article if it matches the query
    } else {
      article.style.display = 'none'; // Hide the article if it doesn't match
    }
  });
});