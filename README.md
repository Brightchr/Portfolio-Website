# Portfolio Website

A modern, responsive, and visually appealing personal portfolio website designed to showcase skills, projects, and contact information. Built with **React**, this project emphasizes smooth animations, accessibility, and ease of use.

---

## Table of Contents

- [Portfolio Website](#portfolio-website)
  - [Table of Contents](#table-of-contents)
  - [Features](#features)
  - [Tech Stack](#tech-stack)
  - [Installation](#installation)
  - [Contact Form](#contact-form)
    - [How it Works](#how-it-works)
  - [Security Note](#security-note)
  - [Future Improvements](#future-improvements)
  - [License](#license)

---

## Features

- **Home Page**: An elegant landing page with smooth scrolling.
- **Projects**: Showcase projects with dynamic data and modal pop-ups for detailed descriptions.
- **Experience Section**: Highlights professional experience with a clean timeline design.
- **Testimonials**: Auto-scrolling testimonials with smooth animations.
- **Contact Form**:
  - EmailJS integration to send messages directly.
  - Responsive feedback after submission.
- **Navbar**: Fixed navigation bar with smooth scroll to sections.
- **Fully Responsive**: Optimized for all screen sizes, from desktop to mobile.

---

## Tech Stack

- **Frontend**: React.js
- **Styling**: TailwindCSS
- **Routing**: React Router DOM
- **Animations**: IntersectionObserver, CSS transitions
- **Email Service**: EmailJS
- **JSON**: For project and state data.

---

## Installation

Follow these steps to set up the project locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/your-repo-name.git
   cd your-repo-name

2. npm install

## Usage
### Navbar
- Navigate through the site using the fixed navigation bar.
- Each link scrolls smoothly to its respective section.

### Projects
- View a grid of projects in the "Portfolio" section.
- Click on a project to open a modal with more details and a "View Source Code" button linking to GitHub.

### Contact Form
- Fill in the form with necessary details.
- On submission, the form sends an email and shows a confirmation message.

## File Structure
```src/
├── assets/
│   ├── Projects.json        # Project data for dynamic rendering
│   ├── states.json          # US states data for the contact form
├── components/
│   ├── Navbar.jsx           # Navigation bar component
│   ├── Footer.jsx           # Footer component
├── pages/
│   ├── Home.jsx             # Home/landing page
│   ├── About.jsx            # About section
│   ├── Projects.jsx         # Projects grid and modals
│   ├── ContactMe.jsx        # Contact form with EmailJS
│   ├── Services.jsx         # Services offered
│   ├── Skills.jsx           # Skills page
│   ├── ProjectDetails.jsx   # Detailed project descriptions
├── styles/
│   ├── index.css            # Custom styles and TailwindCSS
├── App.jsx                  # Main App component
├── index.jsx                # Entry point
```

## Contact Form
### How it Works
- The form sends the input data to the specified email address using EmailJS.
- Feedback is displayed to the user upon submission.

## Security Note
- This site uses Emailjs which requires a key, these keys are not provided to keep my personal infomation secured. They are stored in a .env for my personal use.

## Future Improvements
- Dark/Light Mode: Add a toggle for theme switching.
- Project Categories: Filter projects by type (e.g., web development, design).
- Dynamic Footer: Display current year automatically.
- Analytics: Integrate Google Analytics for tracking user interactions.

## License
This website was created and written by Chris Bright and is not intended for any other use.