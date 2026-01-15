# my_portfolio

## Project Overview

`my_portfolio` is a personal portfolio website designed to showcase projects, skills, and professional experience. Built as a modern single-page application (SPA), it provides an interactive and dynamic platform for presenting your work to potential employers or collaborators.

## Features

*   **Interactive User Interface:** A dynamic and responsive frontend built with React.js.
*   **Client-Side Routing:** Seamless navigation between different sections of the portfolio using `react-router-dom`.
*   **Modern Iconography:** Enhanced visual appeal through the integration of `bootstrap-icons`.
*   **Performance Monitoring:** Includes Web Vitals for tracking and optimizing core user experience metrics.
*   **GitHub Pages Deployment:** Configured for easy deployment and hosting on GitHub Pages.

## Tech Stack

*   **Frontend Framework:** React.js
*   **Language:** JavaScript
*   **Styling:** CSS (via Create React App)
*   **Routing:** React Router DOM
*   **Icons:** Bootstrap Icons
*   **Runtime Environment:** Node.js
*   **Package Manager:** npm (or Yarn/pnpm)
*   **Build Tool:** Create React App (via `react-scripts`)
*   **Deployment:** `gh-pages`

## Installation

To get a local copy up and running, follow these simple steps.

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/ayushprasad07/my_portfolio.git
    cd my_portfolio
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    # or yarn install
    # or pnpm install
    ```

## Usage

### Development Server

To run the application in development mode:

```bash
npm start
# or yarn start
# or pnpm start
```

This will open the application in your browser at `http://localhost:3000`. The page will reload if you make edits. You will also see any lint errors in the console.

### Building for Production

To build the application for production to the `build` folder:

```bash
npm run build
# or yarn build
# or pnpm build
```

This command correctly bundles React in production mode and optimizes the build for the best performance. The build is minified and the filenames include the hashes. Your app is ready to be deployed!

### Deploying to GitHub Pages

To deploy the built application to GitHub Pages (as configured in `package.json`):

```bash
npm run deploy
# or yarn deploy
# or pnpm deploy
```

This script will first run `npm run build` and then push the contents of the `build` directory to the `gh-pages` branch of your repository. The application will then be accessible at the URL specified in the `homepage` field of `package.json`.

## Project Structure

The project follows a standard Create React App structure:

```
my_portfolio/
├── public/                 # Static assets (e.g., index.html, favicon)
├── src/                    # Main application source code
│   ├── App.js              # Main application component
│   ├── index.js            # React entry point
│   ├── index.css           # Global styles
│   └── ...                 # Other components, styles, and assets
├── package.json            # Project metadata and dependencies
├── README.md               # This file
└── ...                     # Other configuration files
```

## License

This project is licensed under the [MIT License](LICENSE).