Architect Website
This project is a website for an architect who wants to showcase their portfolio and services. The website is built with React, Vite, React Router, and SASS.

Features
Responsive design that adapts to different screen sizes and devices
Multiple pages for different sections, such as home, about, projects, contact, etc.
Dynamic rendering of project images and details from a JSON file
Contact form that sends an email to the architect using a serverless function
Installation
To run this project locally, you need to have Node.js and npm installed on your machine. Then follow these steps:

Clone this repository: git clone https://github.com/your-username/architect-website.git
Navigate to the project folder: cd architect-website
Install the dependencies: npm install
Start the development server: npm run dev
Open http://localhost:3000 in your browser
Deployment
To deploy this project to a hosting service, you need to build the production-ready files and upload them to your server. You can use the following commands:

Build the project: npm run build
Copy the dist folder to your server
Configure your server to serve the index.html file for any request
Alternatively, you can use a service like Netlify or Vercel to deploy your project directly from GitHub. You just need to connect your repository and configure the build command and output directory.

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
