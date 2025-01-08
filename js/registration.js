function validateForm() {
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const errorMessage = document.getElementById('error-message');
    const signButton = document.getElementById('signButton');

    // Reset error message and styles
    errorMessage.style.display = "none"; // Hide error message
    errorMessage.innerText = ""; // Clear previous messages

    // Check if the Confirm Password field has been filled
    if (confirmPassword !== "") {
        // Check if passwords match
        if (password !== confirmPassword) {
            errorMessage.innerText = "Passwords do not match. Please try again.";
            errorMessage.style.display = "block"; // Show error message
            signButton.disabled = true; // Disable sign-in button
            return false; // Prevent form submission
        } else {
            signButton.disabled = false; // Enable sign-in button if matched
        }
    } else {
        signButton.disabled = true; // Disable sign-in button if Confirm Password is empty
    }

    // If validations pass
    return true; // Allow form submission
}

// Add event listeners on input fields to check match on input
document.getElementById('password').addEventListener('input', validateForm);
document.getElementById('confirmPassword').addEventListener('input', validateForm);


function validateForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const errorMessage = document.getElementById('error-message');

    // Reset error message and styles
    errorMessage.style.display = "none"; // Hide error message
    errorMessage.innerText = ""; // Clear previous messages

    // Check if any fields are empty
    if (!name || !email || !password || !confirmPassword) {
        errorMessage.innerText = "All fields must be filled out.";
        errorMessage.style.display = "block"; // Show error message
        return false; // Prevent form submission
    }

    // Check if passwords match
    if (password !== confirmPassword) {
        errorMessage.innerText = "Passwords do not match. Please try again.";
        errorMessage.style.display = "block"; // Show error message
        return false; // Prevent form submission
    }

    // If validations pass
    return true; // Allow form submission
}

// Add event listeners on input fields to validate on input
document.getElementById('name').addEventListener('input', validateForm);
document.getElementById('email').addEventListener('input', validateForm);
document.getElementById('password').addEventListener('input', validateForm);
document.getElementById('confirmPassword').addEventListener('input', validateForm);


function validateForm() {
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const errorMessage = document.getElementById('error-message');
    
    // Reset error message and styles
    errorMessage.style.display = "none"; // Hide error message
    errorMessage.innerText = ""; // Clear previous messages
    
    // Check if all required fields are filled
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    if (!name || !email || !password || !confirmPassword) {
        errorMessage.innerText = "All fields are required.";
        errorMessage.style.display = "block"; // Show error message
        return false; // Prevent form submission if any fields are empty
    }

    // Check if the Confirm Password field has been filled
    if (confirmPassword !== "") {
        // Check if passwords match
        if (password !== confirmPassword) {
            errorMessage.innerText = "Passwords do not match. Please try again.";
            errorMessage.style.display = "block"; // Show error message
            return false; // Prevent form submission if passwords do not match
        }
    }
    
    // If validations pass
    return true; // Allow form submission
}

function attemptSignIn() {
    if (validateForm()) {
        // Only proceed to the next page if the form is valid
        window.location.href = '/html/timegetup.html';
    }
}

// Add event listeners on input fields to check match on input
document.getElementById('password').addEventListener('input', validateForm);
document.getElementById('confirmPassword').addEventListener('input', validateForm);