/* Sidebar toggle functions */
function openSidebar() {
    document.getElementById("mySidebar").style.width = "250px";
}

function closeSidebar() {
    document.getElementById("mySidebar").style.width = "0";
}
function validateForm() {
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    // Reset error message and styles
    errorMessage.style.display = "none"; // Hide error message
    document.getElementById('password').classList.remove('invalid'); // Remove invalid class

    // Check if password length is less than 8 characters
    if (password.length < 8) {
        errorMessage.innerText = "Password must be more than 8 characters";
        errorMessage.style.display = "block"; // Show error message
        document.getElementById('password').classList.add('invalid'); // Add invalid class
        return false; // Prevent form submission
    }

    // If validation passes
    return true; // Allow form submission
}