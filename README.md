
# 🌐 Personal Portfolio Website - Aisha Arowolo

A modern and fully responsive personal portfolio website built to showcase my work as an **academic researcher**, **data analyst**, and **frontend web developer**. 

This project highlights my skills, projects, publications, and professional journey in a clean, elegant interface. 

This project reflects my focus on clean UI structure, accessibility, responsiveness and modern web development best practices.

---

## 🔗 **Live Website:** 

🔗 **Live Demo**: 
https://aisha-arowolo-portfolio.vercel.app 

🔗 **GitHub Repository:**
https://github.com/AishaArowoloGit/Aisha-Arowolo-Portfolio

---

## 🚀 **Technologies Used**

- **React.js**
- **Vite**
- **Tailwind CSS**
- **JavaScript (ES6+)**
- **GitHub API** (for dynamic project fetching)
- **Formspree** (for contact form submissions)
- **Vercel** (deployment)

---

## 🎨 **Features**

- Fully responsive modern UI (Mobile, Tablet & Desktop)  
- Hero section with introduction  
- About Me section (academia + data + frontend)
- Featured Projects section with:
  - Live demo links
  - GitHub repository links 
- Dynamic Projects section powered by **GitHub API**  
- Contact form integrated with **Formspree**  
- Smooth scrolling navigation
-  Social media links (GitHub, LinkedIn, X, Facebook, WhatsApp) 
- Fast build setup using **Vite**  
- Deployed with **Vercel** CI/CD
- Clean and consistent UI design system 

---

## 📁 **Project Structure**
Aisha-Arowolo-Portfolio-Website/
│
├── public/
│   ├── favicon.svg
│   ├── icons.svg
│
│   ├── images/
│   │     Figma_UI_Replication.png
│   │     Figma_UI_Replication2.png
│   │     Portfolio.png
│   │     PowerBI_Dashboard.png
│
│   ├── Certificates/
│   │     Advanced Pivot Tables.pdf
│   │     Basic Excel Formulas.pdf
│   │     Data Analytics Starter.pdf
│   │     Data Preparation in Excel.pdf
│   │     Intermediate PowerBI.pdf
│   │     Intermediate SQL.pdf
│   │     Power Query, Power Pivot and Dax.pdf
│
│   └── AishaCV.pdf
│
├── src/
│   ├── assets/
│   │     MyPhoto.png
│   │
│   ├── components/
│   │     About.jsx
│   │     Academic.jsx
│   │     Certifications.jsx
│   │     Contact.jsx
│   │     Footer.jsx
│   │     Hero.jsx
│   │     Navbar.jsx
│   │     Projects.jsx
│   │
│   ├── pages/
│   │     Home.jsx
│   │     Portfolio.jsx
│   │
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
│
├── package.json
├── vite.config.js
└── README.md

---

## ⚙️ **Setup Guide**

Follow these steps to run the project locally:

### 1️⃣ Clone the repository
```
git clone https://github.com/AishaArowoloGit/Aisha-Arowolo-Portfolio.git
```

### 2️⃣ Navigate into the project folder
```
cd Aisha-Arowolo-Portfolio
```

### 3️⃣ Install dependencies
```
npm install
```

### 4️⃣ Start the development server
```
npm run dev
```

### 5️⃣ Build for production
```
npm run build
```

---

## 📬 Contact Form Setup (Formspree)
This portfolio includes a working contact form powered by Formspree, allowing visitors to send messages directly to my email.

1. Create a Formspree Form
Visit https://formspree.io

Create a new form

Copy your form endpoint:

Code
https://formspree.io/f/your_form_id

2. Add the Endpoint to Your Contact Form
In Contact.jsx:

jsx
<form
  action="https://formspree.io/f/your_form_id"
  method="POST"
  className="max-w-md mx-auto space-y-4"
  onSubmit={() => alert('Message sent successfully!')}
>

3. Fields Included
Name

Email

Subject

Message

4. Success Message
Users see a confirmation alert after submitting the form.

---

## 🌐 **Deployment**

This project is deployed on **Vercel**.  
Every push to the `main` branch triggers an automatic redeployment.

---

## 📬 **Contact**

If you'd like to reach out:

- **Email:** arowoshola@gmail.com; arowoloao@funaab.edu.ng 
- **Portfolio:** [https://aisha-arowolo-portfolio.vercel.app](https://aisha-arowolo-portfolio.vercel.app)  

---

## ⭐ **Acknowledgements**

Special thanks to **HerTechTrail Academy** for guidance and support throughout my frontend journey.

---

