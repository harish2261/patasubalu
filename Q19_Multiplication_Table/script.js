function generateTable() {
    const numberInput = document.getElementById('numberInput');
    const rangeInput = document.getElementById('rangeInput');
    const tableContainer = document.getElementById('tableContainer');
    
    const number = parseInt(numberInput.value);
    const range = parseInt(rangeInput.value);
    
    // Clear previous content
    tableContainer.innerHTML = '';
    
    // Validation
    if (isNaN(number) || number < 1) {
        tableContainer.innerHTML = '<div class="error-message">Please enter a valid number!</div>';
        return;
    }
    
    if (isNaN(range) || range < 1) {
        tableContainer.innerHTML = '<div class="error-message">Please enter a valid range!</div>';
        return;
    }
    
    // Create table title
    const title = document.createElement('div');
    title.className = 'table-title';
    title.textContent = `Multiplication Table of ${number}`;
    tableContainer.appendChild(title);
    
    // Create table
    const table = document.createElement('div');
    table.className = 'multiplication-table';
    
    // Generate rows
    for (let i = 1; i <= range; i++) {
        const result = number * i;
        const row = document.createElement('div');
        row.className = 'table-row';
        row.innerHTML = `
            <span class="number">${number}</span> × 
            <span class="number">${i}</span> = 
            <span class="number">${result}</span>
        `;
        
        // Add delay for staggered animation
        row.style.animationDelay = `${i * 0.05}s`;
        
        table.appendChild(row);
    }
    
    tableContainer.appendChild(table);
}

function clearTable() {
    document.getElementById('numberInput').value = '';
    document.getElementById('rangeInput').value = '10';
    document.getElementById('tableContainer').innerHTML = '';
}

// Allow Enter key to trigger generation
document.getElementById('numberInput').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        generateTable();
    }
});

document.getElementById('rangeInput').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        generateTable();
    }
});
