# 🚀 Buildora AI — AI-Powered Website Builder

<p align="center">
  <img src="https://img.shields.io/badge/MERN-FullStack-green?style=for-the-badge" />
  <img src="https://img.shields.io/badge/AI-Integrated-blue?style=for-the-badge" />
  <img src="https://img.shields.io/badge/SaaS-Architecture-purple?style=for-the-badge" />
  <img src="https://img.shields.io/badge/Deployment-Vercel%20%2B%20Render-black?style=for-the-badge" />
</p>

---

## 🌐 Live Demo

🔗 **Frontend:** https://buildora-ai-five.vercel.app
🔗 **Backend API:** https://buildora-ai.onrender.com

---

## 📌 Overview

**Buildora AI** is a full-stack **SaaS platform** that allows users to generate, edit, and deploy complete websites using AI.

It simulates a real-world production system with:

* Authentication
* Credit-based usage
* Payment integration
* Public deployment

---

## 🎯 Problem Statement

Traditional website development requires time, technical expertise, and effort.

👉 Buildora AI solves this by enabling users to **generate production-ready websites instantly using AI**, reducing development time from hours to seconds.

---

## ✨ Key Features

* 🧠 AI-powered website generation (HTML, CSS, JS)
* 🎯 Credit-based system (10 credits generate / 5 modify)
* ✏️ Modify websites using AI prompts
* 🚀 One-click deployment with shareable URL
* 🌍 Public website viewing via `/site/:slug`
* 🔐 Google Authentication (Firebase + JWT)
* 💳 Razorpay payment integration

---

## 🏗️ System Architecture

![Image](https://images.openai.com/static-rsc-4/AiPsM6FaU0tUDYf5x4uL0lRPJ-lcmHqcV5iC5Su73PYlfbv64rTVrV6njeYVkD2JBXCHETGmOlvsBwzpAOrR3ty5itFMA-lSSkXqTwthOl8GWq7egriTPkaS5S8R1ivuqbn5olmpzTejfzUCMze2JxXcp6z6DxJsJwg-e7_9luTIyDVIcJyh1lQHWmRL41fx?purpose=fullsize)

![Image](https://images.openai.com/static-rsc-4/P8yf9Zd3vVJvCNHhCi0qT4mbOV1Q-FnPcFbk2BJifcjIxly3zrn2bbvEhN2S8US6mcUUqqnGUEcphLjCJakvmWG5nU4gvswmIwMfcQHeYuO_LHw59N3DJcFGTQervJBS2AxsONgzfcfxNzrOtDW0HUntDg0Xg4El47JJbGTmZI4geCta-s6tDGDYDVKxm_0I?purpose=fullsize)

![Image](https://images.openai.com/static-rsc-4/Bxf7wshpg7XLhJ1-zKIHNBRX6mbhn28I2DUBww-sfZU_sLSbiSpqPRoiTXtM8DGMomjg5Xp3zEF_CAa8WSes-29lBTA--3Moa78nBOB9KBjscwK_HBhMf0p_NHHgeKsACy-ycalDg0ayFr_eSJYXK41fDzNQaZBaiX-vzhX6e8UxwO-0y1mTlIZaymi87Cj5?purpose=fullsize)

![Image](https://images.openai.com/static-rsc-4/TO_f-1loff39BiOK6WxpDFQ8wFeYWVwi_vxW84eHNe8rrkw2m_nped7zsaxy9WudzTeFcFuzI169yNWsE7peqidCM6c-UgdHsLRwL1x0wbRshexBzLCX8qXLKW8PBzQ6tprVsji3iTTQ41uBS0jGj82cgUNxtG36xQ9j4V1zD6PdPza_ZBSlE2lLcA8JzWWg?purpose=fullsize)

![Image](https://images.openai.com/static-rsc-4/kk8s4-Lv1ptgcyNvxVaSLiQTigoREAWNmMSyFqJiY-HW5ISrpSSo1a3TYbYpDwvcRHIns2jkNCEFLCsyakpD_nrEBhw9x3yxMCIiINagyI3W42XSURT1expLFDSq7bEikfJsAvk2EDZa1oApfGUiCmBoUHTCIxkyUmWo92d7hCXO6Z8Wo267602SbHgzjCtQ?purpose=fullsize)

---

## 🔄 Application Flow

```text
1. User visits frontend (React - Vercel)

2. Authentication:
   → Login via Firebase (Google)
   → Backend generates JWT
   → Stored in HTTP-only cookies

3. Website Generation:
   → User enters prompt
   → Frontend → Backend (/generate)
   → Backend → OpenRouter API
   → AI returns HTML
   → Stored in MongoDB

4. Dashboard:
   → Fetch user websites (protected API)

5. Deployment:
   → Backend generates unique slug
   → Public URL created:
     /site/:slug

6. Public Access:
   → WebsiteViewer loads
   → Calls /getbyslug (NO auth)
   → Renders HTML using iframe

7. Payments:
   → Razorpay integration
   → Credits updated in database
```

---

## ⚙️ Tech Stack

### 🧠 Frontend

* React.js (Vite)
* Redux Toolkit
* Tailwind CSS
* Axios

### 🔥 Backend

* Node.js
* Express.js
* MongoDB (Mongoose)
* JWT Authentication

### 🤖 AI Integration

* OpenRouter API (DeepSeek Model)

### 🔐 Authentication

* Firebase Google Auth

### 💳 Payments

* Razorpay

### ☁️ Deployment

* Vercel (Frontend)
* Render (Backend)
* MongoDB Atlas

---

## 📂 Project Structure

```bash
Buildora-AI/
│
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── database/
│   ├── middlewares/
│   ├── models/
│   ├── routes/
│   ├── utils/
│   ├── index.js
│   └── .env
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── layout/
│   │   ├── pages/
│   │   │   ├── Dashboard.jsx
│   │   │   ├── Generate.jsx
│   │   │   ├── WebsiteEditor.jsx
│   │   │   └── WebsiteViewer.jsx
│   │   ├── redux/
│   │   ├── config.js
│   │   ├── firebase.js
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── index.html
│   └── .env
│
├── screenshots/
│   ├── homepage.png
│   ├── dashboard.png
│   └── preview.png
│
└── README.md
```

---

## 📸 Screenshots

![Homepage](./screenshots/homepage.png)

👉 Add more:

```md
![Dashboard](./screenshots/dashboard.png)
![Preview](./screenshots/preview.png)
```

---

## ⚡ Getting Started

### 1️⃣ Clone Repository

```bash
git clone https://github.com/your-username/buildora-ai.git
cd buildora-ai
```

---

### 2️⃣ Setup Backend

```bash
cd backend
npm install
npm run dev
```

Create `.env`:

```env
PORT=8000
MONGO_URI=your_mongodb_uri
SECRET_KEY=your_secret_key
OPENROUTER_API_KEY=your_api_key
FRONTEND_URL=http://localhost:5173
RAZORPAY_KEY_ID=your_key
RAZORPAY_SECRET=your_secret
```

---

### 3️⃣ Setup Frontend

```bash
cd frontend
npm install
npm run dev
```

Create `.env`:

```env
VITE_SERVER_URL=http://localhost:8000
VITE_FIREBASE_API_KEY=your_key
VITE_RAZORPAY_KEY_ID=your_key
```

---

## 🔐 Environment Variables (Production)

### Backend (Render)

* MONGO_URI
* SECRET_KEY
* OPENROUTER_API_KEY
* FRONTEND_URL
* RAZORPAY_KEY_ID
* RAZORPAY_SECRET

### Frontend (Vercel)

* VITE_SERVER_URL
* VITE_FIREBASE_API_KEY
* VITE_RAZORPAY_KEY_ID

---

## 🧪 Test Credentials (Razorpay)

```
Card: 4111 1111 1111 1111
Expiry: Any future date
CVV: 123
OTP: 123456
```

---

## 🚧 Known Issues

* Ad blockers may block Razorpay logs
* Firebase requires authorized domains

---

## 📈 Future Improvements

* Custom domain deployment
* Drag & drop editor
* Templates marketplace
* Team collaboration

---

## 👩‍💻 Author

**Srashti Chauhan**
BTech CSE | Full Stack Developer

---

## ⭐ Show Your Support

If you like this project:

⭐ Star the repo
🍴 Fork it
🚀 Share it

---

<p align="center">
  Made with ❤️ and AI
</p>
