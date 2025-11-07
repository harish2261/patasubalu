# Question 19: Multiplication Table Generator

## Description
Develop a JavaScript application that dynamically generates a multiplication table for a number entered by the user.

## How to Run
1. Open `index.html` in a web browser
2. Enter a number (e.g., 5)
3. Optionally, change the range (default is 10)
4. Click "Generate Table" or press Enter
5. View the dynamically generated multiplication table

## Features
- Dynamic table generation
- Customizable range (how many rows to generate)
- Input validation
- Animated table rows with staggered entrance
- Hover effects on table rows
- Responsive design
- Clear button to reset
- Keyboard support (Enter key)

## How It Works
1. User enters a number and range
2. JavaScript validates the input
3. DOM manipulation creates table elements
4. Each row is generated with the formula: `number × i = result`
5. Animations are applied for smooth appearance

## Example
For number = 5 and range = 10:
```
5 × 1 = 5
5 × 2 = 10
5 × 3 = 15
...
5 × 10 = 50
```

## Technologies
- HTML5
- CSS3 (Grid, Animations)
- Vanilla JavaScript
- DOM Manipulation
