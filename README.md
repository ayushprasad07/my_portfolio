# My Portfolio

[![Live Demo](https://img.shields.io/badge/Live%20Demo-View%20Portfolio-blue?style=for-the-badge&logo=github)](https://ayushprasad07.github.io/my_portfolio)

## Project Overview

This repository hosts **My Portfolio**, a personal website designed to showcase projects, skills, and experience. Built with React.js, it provides an interactive and modern user interface for visitors to explore. The portfolio is configured for easy deployment and is publicly accessible online via GitHub Pages.

**Live Demo:** [https://ayushprasad07.github.io/my_portfolio](https://ayushprasad07.github.io/my_portfolio)

## Features

*   **Interactive User Interface:** Developed with React.js for a dynamic and engaging user experience.
*   **Client-Side Routing:** Seamless navigation between different sections of the portfolio using `react-router-dom`.
*   **Professional Iconography:** Utilizes `bootstrap-icons` for a clean and modern visual aesthetic.
*   **Easy Deployment:** Configured for straightforward deployment to GitHub Pages using `gh-pages`.
*   **Performance Monitoring:** Includes `web-vitals` for tracking and optimizing core web vitals.
*   **Standardized Testing:** Set up with `@testing-library/react` for robust component testing.

## Tech Stack

*   **Frontend Framework:** React.js
*   **Language:** JavaScript (ES6+)
*   **Build Tool:** Create React App
*   **Routing:** React Router DOM
*   **Icons:** Bootstrap Icons
*   **Package Manager:** npm
*   **Deployment:** GitHub Pages

## Installation

To get a local copy of this project up and running, follow these simple steps.

### Prerequisites

Ensure you have Node.js and npm installed on your machine.

*   Node.js (LTS version recommended)
*   npm (usually comes with Node.js)

### Clone the Repository

```bash
git clone <repository-url> # Replace with the actual repository URL
cd my_portfolio
```

### Install Dependencies

```bash
npm install
```

## Usage

### Development Server

To start the development server and view the project in your browser:

```bash
npm start
```
The application will typically open at `http://localhost:3000`.

### Build for Production

To build the optimized production-ready version of the application:

```bash
npm run build
```
This command creates a `build` directory with static assets, ready for deployment.

### Run Tests

To execute the test suite:

```bash
npm test
```

### Deploy to GitHub Pages

To deploy the application to your GitHub Pages `homepage` URL (as defined in `package.json`):

```bash
npm run deploy
```
This command first runs `npm run build` and then pushes the content of the `build` directory to the `gh-pages` branch of your repository.

## Project Structure

The project follows a standard Create React App structure:

```
my_portfolio/
├── public/                 # Static assets (index.html, favicon, etc.)
├── src/                    # Main application source code
│   ├── App.js              # Main application component
│   ├── index.js            # Entry point for the React application
│   ├── index.css           # Global styles
│   └── reportWebVitals.js  # Web Vitals reporting
├── .gitignore              # Specifies intentionally untracked files
├── package.json            # Project metadata and dependencies
├── README.md               # This file
└── ...                     # Other configuration files (e.g., .eslintrc.json)
```

## License

This project is licensed under the MIT License.