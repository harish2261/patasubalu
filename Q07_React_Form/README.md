# Question 7: React Form Component

## Description
Create a React form component that accepts name, email, and age, and displays the submitted data dynamically without refreshing the page.

## How to Run
1. Open `index.html` directly in a web browser
2. Fill in the form fields (name, email, age)
3. Click Submit to see the data displayed below the form
4. No page refresh occurs - data is displayed dynamically

## Features
- Form with three input fields: name, email, and age
- useState Hook for managing form data
- Dynamic data display without page refresh
- Form validation (required fields, email format, age range)
- Controlled components
- Clean and responsive UI

## Code Highlights
- Uses object state for multiple form fields
- handleChange function updates state dynamically
- handleSubmit prevents default form submission
- Conditional rendering for submitted data display
