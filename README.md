# React + Vite
## This project is a React application built using Vite, a fast build tool and development server.

The project uses React, Hooks, and LocalStorage
- Vite: Vite is used as the build tool and development server, providing fast and efficient development workflows.
- ESLint: The project includes ESLint for linting JavaScript and JSX code, ensuring code quality and consistency.
- Components: The src/components directory contains React components like Guitar.jsx and Header.jsx.
- Data: The src/data/db.js file contains mock data for guitars, including their names, images, descriptions, and prices.
- Styling: The index.css file contains CSS styles for the application, including styles for buttons, cart elements, and images.
- Configuration: The vite.config.js file contains the Vite configuration, including plugins for React.
- HTML Template: The index.html file serves as the entry point for the application, linking to the main JavaScript file and including meta tags and external resources like Google Fonts.

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
