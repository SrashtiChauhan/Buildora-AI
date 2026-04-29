# 🚀 Buildora AI — AI-Powered Website Builder

<p align="center">
  <img src="https://img.shields.io/badge/MERN-FullStack-green?style=for-the-badge" />
  <img src="https://img.shields.io/badge/AI-Integrated-blue?style=for-the-badge" />
  <img src="https://img.shields.io/badge/Deployed-Vercel%20%2B%20Render-black?style=for-the-badge" />
  <img src="https://img.shields.io/badge/Status-Production%20Ready-success?style=for-the-badge" />
</p>

---

## 🌐 Live Demo

🔗 **Frontend:** https://buildora-ai-five.vercel.app

🔗 **Backend API:** https://buildora-ai.onrender.com

---

## 📌 Overview

**Buildora AI** is a full-stack AI-powered SaaS platform that allows users to:

* ✨ Generate complete websites using AI
* 🎨 Edit and manage generated sites
* 🚀 Deploy websites instantly
* 💳 Purchase credits via Razorpay
* 🔐 Authenticate via Google (Firebase)

> Built with real-world SaaS architecture using MERN + AI APIs.

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

* Razorpay (Test Mode)

### ☁️ Deployment

* Frontend → Vercel
* Backend → Render
* Database → MongoDB Atlas

---

## 🏗️ Project Structure

```
Buildora-ai/
│
├── backend/
│   ├── controllers/
│   │   ├── authController.js
│   │   ├── websiteController.js
│   │   └── paymentController.js
│   │
│   ├── models/
│   │   ├── userModel.js
│   │   └── websiteModel.js
│   │
│   ├── routes/
│   │   ├── authRoute.js
│   │   ├── websiteRoute.js
│   │   └── paymentRoute.js
│   │
│   ├── database/
│   │   └── db.js
│   │
│   ├── utils/
│   │   └── extractJson.js
│   │
│   ├── config/
│   │   └── openRouter.js
│   │
│   ├── index.js
│   └── .env
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   │   ├── Dashboard.jsx
│   │   │   ├── Generate.jsx
│   │   │   ├── WebsiteEditor.jsx
│   │   │   └── LiveSite.jsx
│   │   │
│   │   ├── redux/
│   │   ├── config.js
│   │   ├── firebase.js
│   │   └── main.jsx
│   │
│   ├── index.html
│   └── .env
│
└── README.md
```

---

## 🔑 Features

### 🧠 AI Website Generation

* Generates full responsive websites (HTML/CSS/JS)
* Production-ready output

### 🎯 Credit System

* 10 credits → Generate website
* 5 credits → Modify website

### 🚀 Deployment

* One-click deploy
* Shareable live preview link

### 🔐 Authentication

* Google login via Firebase
* Secure JWT cookie-based sessions

### 💳 Payments

* Razorpay integration
* Credit purchase system

---

## ⚡ Getting Started

### 1️⃣ Clone the repository

```bash
git clone https://github.com/your-username/buildora-ai.git
cd buildora-ai
```

---

### 2️⃣ Setup Backend

```bash
cd backend
npm install
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

Run:

```bash
npm run dev
```

---

### 3️⃣ Setup Frontend

```bash
cd frontend
npm install
```

Create `.env`:

```env
VITE_SERVER_URL=http://localhost:8000
VITE_FIREBASE_API_KEY=your_key
VITE_RAZORPAY_KEY_ID=your_key
```

Run:

```bash
npm run dev
```

---

## 🔐 Environment Variables (Production)

### Backend (Render)

* `MONGO_URI`
* `SECRET_KEY`
* `OPENROUTER_API_KEY`
* `FRONTEND_URL`
* `RAZORPAY_KEY_ID`
* `RAZORPAY_SECRET`

### Frontend (Vercel)

* `VITE_SERVER_URL`
* `VITE_FIREBASE_API_KEY`
* `VITE_RAZORPAY_KEY_ID`

---

## 🧪 Test Credentials

### Razorpay (Test Mode)

```
Card: 4111 1111 1111 1111
Expiry: Any future date
CVV: 123
OTP: 123456
```

---

## 🚧 Known Issues

* Ad blockers may block Razorpay logs (safe to ignore)
* Firebase requires authorized domains for deployment

---

## 📈 Future Improvements

* Custom domain deployment
* Drag & drop editor
* Templates marketplace
* Team collaboration
* Website hosting system

---

## 🤝 Contributing

Pull requests are welcome.
For major changes, please open an issue first.

---

## 📄 License

MIT License

---

## 👩‍💻 Author

**Srashti Chauhan**
BTech CSE | Full Stack Developer

---

## ⭐ Show your support

If you like this project:

⭐ Star the repo
🍴 Fork it
🚀 Share it

---

<p align="center">
  Made with ❤️ and AI
</p>
