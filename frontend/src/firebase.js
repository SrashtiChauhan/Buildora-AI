// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider  } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "buildora-ai-7f5af.firebaseapp.com",
  projectId: "buildora-ai-7f5af",
  storageBucket: "buildora-ai-7f5af.firebasestorage.app",
  messagingSenderId: "801768601853",
  appId: "1:801768601853:web:c42ab65cab00dac091a694"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider= new GoogleAuthProvider()

export {auth, provider}