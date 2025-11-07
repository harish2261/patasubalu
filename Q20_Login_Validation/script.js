// Get form elements
const form = document.getElementById('loginForm');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirmPassword');

// Validation functions
function validateUsername(username) {
    return username.length >= 4;
}

function validatePassword(password) {
    return password.length >= 8;
}

function validateConfirmPassword(password, confirmPassword) {
    return password === confirmPassword && confirmPassword.length > 0;
}

// Display error message
function showError(inputElement, errorElement, message) {
    errorElement.textContent = message;
    inputElement.classList.add('invalid');
    inputElement.classList.remove('valid');
}

// Clear error message
function clearError(inputElement, errorElement) {
    errorElement.textContent = '';
    inputElement.classList.remove('invalid');
    inputElement.classList.add('valid');
}

// Real-time validation for username
usernameInput.addEventListener('blur', function() {
    const errorElement = document.getElementById('usernameError');
    
    if (this.value === '') {
        this.classList.remove('valid', 'invalid');
        errorElement.textContent = '';
    } else if (!validateUsername(this.value)) {
        showError(this, errorElement, 'Username must be at least 4 characters long');
    } else {
        clearError(this, errorElement);
    }
});

// Real-time validation for password
passwordInput.addEventListener('blur', function() {
    const errorElement = document.getElementById('passwordError');
    
    if (this.value === '') {
        this.classList.remove('valid', 'invalid');
        errorElement.textContent = '';
    } else if (!validatePassword(this.value)) {
        showError(this, errorElement, 'Password must be at least 8 characters long');
    } else {
        clearError(this, errorElement);
    }
    
    // Also revalidate confirm password if it has a value
    if (confirmPasswordInput.value) {
        confirmPasswordInput.dispatchEvent(new Event('blur'));
    }
});

// Real-time validation for confirm password
confirmPasswordInput.addEventListener('blur', function() {
    const errorElement = document.getElementById('confirmPasswordError');
    
    if (this.value === '') {
        this.classList.remove('valid', 'invalid');
        errorElement.textContent = '';
    } else if (!validateConfirmPassword(passwordInput.value, this.value)) {
        showError(this, errorElement, 'Passwords do not match');
    } else {
        clearError(this, errorElement);
    }
});

// Form submission
form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const username = usernameInput.value.trim();
    const password = passwordInput.value;
    const confirmPassword = confirmPasswordInput.value;
    
    let isValid = true;
    
    // Validate username
    if (!validateUsername(username)) {
        showError(usernameInput, document.getElementById('usernameError'), 
            'Username must be at least 4 characters long');
        isValid = false;
    } else {
        clearError(usernameInput, document.getElementById('usernameError'));
    }
    
    // Validate password
    if (!validatePassword(password)) {
        showError(passwordInput, document.getElementById('passwordError'), 
            'Password must be at least 8 characters long');
        isValid = false;
    } else {
        clearError(passwordInput, document.getElementById('passwordError'));
    }
    
    // Validate confirm password
    if (!validateConfirmPassword(password, confirmPassword)) {
        showError(confirmPasswordInput, document.getElementById('confirmPasswordError'), 
            'Passwords do not match');
        isValid = false;
    } else {
        clearError(confirmPasswordInput, document.getElementById('confirmPasswordError'));
    }
    
    // If all validations pass
    if (isValid) {
        const successMessage = document.getElementById('successMessage');
        successMessage.textContent = `✓ Login successful! Welcome, ${username}!`;
        successMessage.classList.add('show');
        
        // Reset form after 3 seconds
        setTimeout(() => {
            form.reset();
            usernameInput.classList.remove('valid');
            passwordInput.classList.remove('valid');
            confirmPasswordInput.classList.remove('valid');
            successMessage.classList.remove('show');
        }, 3000);
    }
});

// Clear validation on input
[usernameInput, passwordInput, confirmPasswordInput].forEach(input => {
    input.addEventListener('input', function() {
        if (this.classList.contains('invalid')) {
            this.classList.remove('invalid');
        }
    });
});
