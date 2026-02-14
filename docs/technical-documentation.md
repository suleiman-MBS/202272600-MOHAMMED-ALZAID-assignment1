# Technical Documentation

## 1. Project Overview
This project is a responsive personal portfolio website built using semantic HTML5, CSS3 for styling, and vanilla JavaScript for interactivity. It serves as a foundation for a professional portfolio, showcasing academic projects and providing a contact method.

## 2. File Structure
- **index.html:** The main entry point containing the semantic structure (Header, Nav, Sections, Footer).
- **css/styles.css:** Contains all styling rules, variables, and media queries for responsiveness.
- **js/script.js:** Handles client-side logic and event listeners.
- **assets/images/:** Stores static image assets (profile pictures, project thumbnails).
- **docs/:** Contains project documentation and AI usage reports.

## 3. Technical Implementation

### HTML5
- Used semantic tags (`<nav>`, `<section>`, `<footer>`) to improve accessibility and SEO.
- The `id` attributes (`#about`, `#projects`, `#contact`) are used for internal anchor navigation.

### CSS3 & Responsive Design
- **Layout:** Utilized **CSS Grid** for the Projects section to create a clean, card-based layout.
- **Flexbox:** Used for the Navigation bar to align the logo and menu items horizontally.
- **Responsiveness:** Implemented a Mobile-First approach. A media query (`@media (min-width: 768px)`) is used to switch the project grid from 1 column (mobile) to 2 columns (desktop).

### JavaScript
- **Event Listeners:** attached a `submit` event listener to the contact form.
- **Interactivity:** Prevents the default form submission (page reload) and displays a custom alert message to provide immediate user feedback.

## 4. Installation & Setup
1.  Clone the repository:
    ```bash
    git clone [https://github.com/suleiman-MBS/202272600-MOHAMMED-ALZAID-assignment1.git](https://github.com/suleiman-MBS/202272600-MOHAMMED-ALZAID-assignment1.git)
    ```
2.  Open `index.html` in a browser. No build steps or server requirements are needed.
