// JavaScript for dynamic button interactions and animations

// Function to add a simple animation on button click
function animateButtonClick(event) {
    event.preventDefault();
    const button = event.target;
    button.classList.add('button-clicked');
    setTimeout(() => {
        button.classList.remove('button-clicked');
    }, 300);
}

// Add event listeners to all buttons with the class 'channel-button'
document.querySelectorAll('.channel-button').forEach(button => {
    button.addEventListener('click', animateButtonClick);
});

// Add similar functionality for 'small-button' if needed
document.querySelectorAll('.small-button').forEach(button => {
    button.addEventListener('click', animateButtonClick);
});