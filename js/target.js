const targetButtons = document.querySelectorAll('.target-button');

targetButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Toggle 'selected' class on the clicked button
        button.classList.toggle('selected');
    });
});