function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;
    
    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
    }
    return true;
}

function isEven(num) {
    return num % 2 === 0;
}

function checkNumber() {
    const input = document.getElementById('numberInput');
    const result = document.getElementById('result');
    const num = parseInt(input.value);
    
    // Clear previous classes
    result.className = 'result';
    
    if (isNaN(num)) {
        result.textContent = 'Please enter a valid number!';
        result.classList.add('error');
        return;
    }
    
    let messages = [];
    
    // Check if prime
    if (isPrime(num)) {
        messages.push('Prime');
        result.classList.add('prime');
    }
    
    // Check if even or odd
    if (isEven(num)) {
        messages.push('Even');
        if (!result.classList.contains('prime')) {
            result.classList.add('even');
        }
    } else {
        messages.push('Odd');
        if (!result.classList.contains('prime')) {
            result.classList.add('odd');
        }
    }
    
    result.textContent = `The number ${num} is: ${messages.join(' and ')}`;
}

// Allow Enter key to trigger check
document.getElementById('numberInput').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        checkNumber();
    }
});
