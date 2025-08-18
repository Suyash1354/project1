// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyDU9RjPxinVmPYLFf0wvf-dxDV_lmWvtnA",
  authDomain: "projecttti1-a62c1.firebaseapp.com",
  projectId: "projecttti1-a62c1",
  storageBucket: "projecttti1-a62c1.firebasestorage.app",
  messagingSenderId: "67589351446",
  appId: "1:67589351446:web:327c7cf45cc721a5f46d37",
  measurementId: "G-BGJYP6ZWCC",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Auth service
export const auth = getAuth(app);
