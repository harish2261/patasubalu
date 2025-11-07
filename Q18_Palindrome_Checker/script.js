function isPalindrome(str) {
    // Remove non-alphanumeric characters and convert to lowercase
    const cleanStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    
    // Reverse the string
    const reversedStr = cleanStr.split('').reverse().join('');
    
    // Check if the cleaned string equals its reverse
    return cleanStr === reversedStr;
}

function checkPalindrome() {
    const input = document.getElementById('textInput');
    const result = document.getElementById('result');
    const text = input.value.trim();
    
    // Clear previous classes
    result.className = 'result';
    
    if (text === '') {
        result.textContent = 'Please enter some text!';
        result.classList.add('empty');
        return;
    }
    
    if (isPalindrome(text)) {
        result.textContent = `"${text}" is a PALINDROME! 🎉`;
        result.classList.add('palindrome');
    } else {
        result.textContent = `"${text}" is NOT a palindrome.`;
        result.classList.add('not-palindrome');
    }
}

// Allow Enter key to trigger check
document.getElementById('textInput').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        checkPalindrome();
    }
});

// Clear result when user starts typing again
document.getElementById('textInput').addEventListener('input', function() {
    const result = document.getElementById('result');
    if (result.classList.contains('palindrome') || result.classList.contains('not-palindrome')) {
        result.className = 'result';
        result.textContent = '';
    }
});
