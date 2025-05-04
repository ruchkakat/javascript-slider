//Getting elements from HTML
const slides = document.querySelectorAll(".slide");
//querySelectorAll returns a special collection of elements that behaves like an array, so many array methods work for it, including forEach
const leftArrow = document.querySelector(".fa-circle-chevron-left");
const rightArrow = document.querySelector(".fa-circle-chevron-right");
//Counter that stores the current slide number
let currentSlide = 0;

//Function that shows the current slide and hides all others
function showSlide() {
  slides.forEach((slide, index) => {
    /* For each slide, checks if its index is equal to currentSlide.
    If yes, it adds the "active" class. If no, it removes the "active" class. */
    if (index === currentSlide) {
      slide.classList.add("active");
    } else {
      slide.classList.remove("active");
    }
  });
}

//Function to move to the next slide (right arrow)
function nextSlide() {
    /* Increments currentSlide by 1.
    If we reach the end, we return to the beginning.
    Then we update the display. */
    currentSlide++;

    if (currentSlide >= slides.length) {
        currentSlide = 0;
    }
    
    showSlide();
}

// Function to go to the previous slide (left arrow)
function prevSlide() {
    /* Performs similar actions to the previous function.
    If we reach the beginning, we move to the end. */
    currentSlide--;
    
    if (currentSlide < 0) {
        currentSlide = slides.length - 1;
    }
    
    showSlide();
}

/* Adds an event handler for the click on the arrows.
If we try to add an event handler before the prevSlide or nextSlide function is declared, we will get an error.
The code will not work because the functions do not exist yet. */
leftArrow.addEventListener('click', prevSlide);
rightArrow.addEventListener('click', nextSlide);

showSlide();
