# Shariq — Developer Portfolio

A modern, responsive, and interactive developer portfolio built with **React.js, Vite, and Tailwind CSS**. It showcases my technical skills, professional experience, education, and selected projects.

## 🌐 Live Demo

**[View Live Portfolio](https://shariqreactportfolio.vercel.app)**

---

## Features

* Fully responsive design
* Modern and clean user interface
* Smooth scrolling and transitions
* Interactive project showcase
* Project details with image gallery
* Project filtering on the All Projects page
* Skills, experience, and education sections
* Functional contact form with EmailJS
* Toast notifications for form feedback
* Scroll-to-top functionality
* Reusable React components
* Organized project structure

---

## Tech Stack

| Technology     | Purpose                       |
| -------------- | ----------------------------- |
| React.js       | Frontend development          |
| JavaScript     | Application logic             |
| Tailwind CSS   | Styling and responsive design |
| Vite           | Development and build tool    |
| React Router   | Client-side routing           |
| EmailJS        | Contact form integration      |
| Lucide React   | UI icons                      |
| React Icons    | Brand and social icons        |
| React Toastify | Notifications                 |

---

## 📂 Project Structure

```text
portfolio/
│
├── public/
│   └── logo.png
│
├── src/
│   ├── assets/
│   │   ├── projects/
│   │   └── profile-img.jpeg
│   │
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── ProjectModal.jsx
│   │   └── ScrollToTop.jsx
│   │
│   ├── data/
│   │   ├── education.js
│   │   ├── experience.js
│   │   ├── navigation.js
│   │   ├── projects.js
│   │   └── skills.js
│   │
│   ├── hooks/
│   │   └── useActiveSection.js
│   │
│   ├── sections/
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Experience.jsx
│   │   ├── Education.jsx
│   │   ├── Projects.jsx
│   │   └── Contact.jsx
│   │
│   ├── pages/
│   │   └── AllProjects.jsx
│   │
│   ├── service/
│   │   └── emailService.js
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── .env
├── .gitignore
├── index.html
├── package.json
├── package-lock.json
└── README.md
```

---

## Getting Started

### Prerequisites

Make sure you have **Node.js** and **npm** installed on your system.

### Installation

Clone the repository:

```bash
git clone https://github.com/Shariq2004/portfolio.git
```

Navigate to the project directory:

```bash
cd portfolio
```

Install the dependencies:

```bash
npm install
```

### Environment Variables

Create a `.env` file in the root directory and add your EmailJS credentials:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

> Keep your environment variables private and do not commit the `.env` file to GitHub.

### Run Locally

Start the development server:

```bash
npm run dev
```

The application will be available at:

```text
http://localhost:5173
```

---

## Production Build

To create an optimized production build:

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

---

## Contact Form

The portfolio uses **EmailJS** to handle contact form submissions.

Visitors can send their:

* Name
* Email
* Subject
* Message

The form provides loading feedback and success/error notifications after submission.

---

## Deployment

This project can be deployed on platforms such as **Vercel** or **Netlify**.

For deployment, make sure the required EmailJS environment variables are configured in the hosting platform.

---

## About Me

I'm **Shariq Ahmad**, a web developer focused on building modern, responsive, and user-friendly web applications.

My current areas of interest include:

* React.js
* JavaScript
* MERN Stack
* Frontend Development
* Full-Stack Web Development

---

## 🔗 Connect With Me

* **GitHub:** [@Shariq2004](https://github.com/Shariq2004)
* **LinkedIn:** [LinkedIn Profile](https://www.linkedin.com/in/shariq786/)
* **Portfolio:** [Live Website](https://shariqreactportfolio.vercel.app)

---

## License

This project is open source and available under the **MIT License**.

---

### ⭐ If you like this portfolio, consider giving the repository a star.
