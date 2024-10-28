const toggleContainer = document.getElementById('toggle-container');
const circle = document.getElementById('circle');
const body = document.body;

toggleContainer.addEventListener('click', () => {
    circle.classList.toggle('dark-mode');
    body.classList.toggle('bck-color-black');
    body.classList.toggle('color-white');
});
const toggle = document.getElementById('toggle-container');

toggle.addEventListener('click', () => {
    document.body.classList.toggle('night-mode');
});
const toggleButton = document.getElementById('toggle-button'); // Your toggle button ID
const heading = document.querySelector('h1'); // Select the <h1> element

toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');

    // Toggle classes for <h1> element
    heading.classList.toggle('dark-mode');
    heading.classList.toggle('light-mode');
    
    // Add crazy animation class
    heading.classList.add('crazy');
    
    // Remove crazy class after animation ends to allow it to play again
    setTimeout(() => {
        heading.classList.remove('crazy');
    }, 1000); // Duration of the crazy animation
});
