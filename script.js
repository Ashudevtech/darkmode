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
