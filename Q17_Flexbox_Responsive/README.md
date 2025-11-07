# Question 17: Responsive Flexbox Layout

## Description
Design a webpage layout using Flexbox that rearranges its columns into rows when the screen width drops below 768px.

## How to Run
1. Open `index.html` in a web browser
2. Resize the browser window to see the layout change
3. When width < 768px, columns stack vertically

## Features
- Flexbox layout with three columns
- Responsive design using media queries
- Columns display side-by-side on larger screens (≥768px)
- Columns stack vertically on smaller screens (<768px)
- Smooth transitions and hover effects
- Colorful gradient backgrounds
- Mobile-first approach

## Breakpoints
- **Desktop (≥768px):** 3 columns side by side
- **Tablet/Mobile (<768px):** Columns stack into rows
- **Small Mobile (<480px):** Additional optimizations

## Key CSS Properties
- `display: flex`
- `flex-wrap: wrap`
- `flex-direction: column` (in media query)
- `@media (max-width: 768px)`
