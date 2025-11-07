# Question 20: Login Form Validation

## Description
Create a webpage that validates login credentials using JavaScript and displays appropriate error messages through DOM manipulation.

## How to Run
1. Open `index.html` in a web browser
2. Try filling out the form with different inputs
3. See real-time validation feedback
4. Submit the form when all validations pass

## Validation Rules
1. **Username:** Must be at least 4 characters long
2. **Password:** Must be at least 8 characters long
3. **Confirm Password:** Must match the password field

## Features
- Real-time validation on blur (when field loses focus)
- Visual feedback (green border for valid, red for invalid)
- Error messages displayed using DOM manipulation
- Success message on successful validation
- Form reset after successful submission
- Responsive design
- Smooth animations

## Technologies Used
- HTML5
- CSS3 (Animations, Gradients)
- Vanilla JavaScript
- DOM Manipulation

## DOM Manipulation Features
- `getElementById()` - Get form elements
- `classList.add()` / `classList.remove()` - Add/remove CSS classes
- `textContent` - Display error messages
- `addEventListener()` - Handle events
- Dynamic class manipulation for visual feedback
