// Get form elements
const form = document.getElementById('registrationForm');
const emailInput = document.getElementById('email');
const mobileInput = document.getElementById('mobile');
const passwordInput = document.getElementById('password');

// Validation functions
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function validateMobile(mobile) {
    const mobileRegex = /^[6-9]\d{9}$/; // Indian mobile number format
    return mobileRegex.test(mobile);
}

function checkPasswordStrength(password) {
    let strength = 0;
    const feedback = [];
    
    if (password.length >= 8) strength++;
    else feedback.push('at least 8 characters');
    
    if (/[a-z]/.test(password)) strength++;
    else feedback.push('lowercase letter');
    
    if (/[A-Z]/.test(password)) strength++;
    else feedback.push('uppercase letter');
    
    if (/[0-9]/.test(password)) strength++;
    else feedback.push('number');
    
    if (/[^a-zA-Z0-9]/.test(password)) strength++;
    else feedback.push('special character');
    
    return { strength, feedback };
}

// Real-time validation
emailInput.addEventListener('input', function() {
    const errorElement = document.getElementById('emailError');
    if (this.value === '') {
        this.classList.remove('valid', 'invalid');
        errorElement.textContent = '';
    } else if (validateEmail(this.value)) {
        this.classList.add('valid');
        this.classList.remove('invalid');
        errorElement.textContent = '';
    } else {
        this.classList.add('invalid');
        this.classList.remove('valid');
        errorElement.textContent = 'Please enter a valid email address';
    }
});

mobileInput.addEventListener('input', function() {
    const errorElement = document.getElementById('mobileError');
    if (this.value === '') {
        this.classList.remove('valid', 'invalid');
        errorElement.textContent = '';
    } else if (validateMobile(this.value)) {
        this.classList.add('valid');
        this.classList.remove('invalid');
        errorElement.textContent = '';
    } else {
        this.classList.add('invalid');
        this.classList.remove('valid');
        errorElement.textContent = 'Please enter a valid 10-digit mobile number';
    }
});

passwordInput.addEventListener('input', function() {
    const errorElement = document.getElementById('passwordError');
    const strengthBar = document.getElementById('strengthBar');
    const strengthText = document.getElementById('strengthText');
    
    if (this.value === '') {
        this.classList.remove('valid', 'invalid');
        errorElement.textContent = '';
        strengthBar.style.width = '0%';
        strengthText.textContent = '';
        return;
    }
    
    const { strength, feedback } = checkPasswordStrength(this.value);
    
    // Update strength bar
    const percentage = (strength / 5) * 100;
    strengthBar.style.width = percentage + '%';
    
    // Update colors and text based on strength
    if (strength <= 2) {
        strengthBar.style.backgroundColor = '#f44336';
        strengthText.style.color = '#f44336';
        strengthText.textContent = 'Weak - Need: ' + feedback.join(', ');
        this.classList.add('invalid');
        this.classList.remove('valid');
    } else if (strength <= 3) {
        strengthBar.style.backgroundColor = '#ff9800';
        strengthText.style.color = '#ff9800';
        strengthText.textContent = 'Medium - Need: ' + feedback.join(', ');
        this.classList.add('invalid');
        this.classList.remove('valid');
    } else {
        strengthBar.style.backgroundColor = '#4CAF50';
        strengthText.style.color = '#4CAF50';
        strengthText.textContent = 'Strong password!';
        this.classList.add('valid');
        this.classList.remove('invalid');
    }
    
    errorElement.textContent = '';
});

// Form submission
form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const email = emailInput.value;
    const mobile = mobileInput.value;
    const password = passwordInput.value;
    
    let isValid = true;
    
    // Validate email
    if (!validateEmail(email)) {
        document.getElementById('emailError').textContent = 'Please enter a valid email';
        emailInput.classList.add('invalid');
        isValid = false;
    }
    
    // Validate mobile
    if (!validateMobile(mobile)) {
        document.getElementById('mobileError').textContent = 'Please enter a valid mobile number';
        mobileInput.classList.add('invalid');
        isValid = false;
    }
    
    // Validate password
    const { strength } = checkPasswordStrength(password);
    if (strength < 4) {
        document.getElementById('passwordError').textContent = 'Password is not strong enough';
        passwordInput.classList.add('invalid');
        isValid = false;
    }
    
    if (isValid) {
        const successMessage = document.getElementById('successMessage');
        successMessage.textContent = 'Form submitted successfully!';
        successMessage.classList.add('show');
        
        // Reset form
        setTimeout(() => {
            form.reset();
            emailInput.classList.remove('valid');
            mobileInput.classList.remove('valid');
            passwordInput.classList.remove('valid');
            document.getElementById('strengthBar').style.width = '0%';
            document.getElementById('strengthText').textContent = '';
            successMessage.classList.remove('show');
        }, 3000);
    }
});
