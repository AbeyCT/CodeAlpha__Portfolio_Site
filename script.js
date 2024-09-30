const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');
const closeBtn = document.getElementById('close-btn');

// Toggle Menu on Hamburger Click
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');  
    closeBtn.classList.toggle('active');   
});

// Close Menu on Close Button Click
closeBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');  
    closeBtn.classList.toggle('active');  
});










const heading = "What Clients Say";
const words = heading.split(" ");
const headingElement = document.getElementById("clients-say-heading");

let index = 0;

function displayWords() {
  headingElement.textContent = ""; // Clear existing text
  index = 0; 

  function showWord() {
    if (index < words.length) {
      headingElement.textContent += words[index] + " ";
      index++;
      setTimeout(showWord, 500); // Adjust the timing (500ms) as needed
    } else {
      setTimeout(displayWords, 2000); // Wait before starting again (2 seconds)
    }
  }

  showWord();
}

displayWords();





// Get the button
var scrollToTopButton = document.getElementById("scrollToTopButton");

// Show the button when the user scrolls down 100px from the top
window.onscroll = function() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollToTopButton.style.display = "block";
    } else {
        scrollToTopButton.style.display = "none";
    }
};

// Scroll to the top of the document when the button is clicked
scrollToTopButton.onclick = function(event) {
    event.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
};



