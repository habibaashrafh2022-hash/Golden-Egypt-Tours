import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDhEaZiJt3c01DD-7A3aPXYtLNy8vwaq5o",
  authDomain: "golden-egypt-tours.firebaseapp.com",
  projectId: "golden-egypt-tours",
  storageBucket: "golden-egypt-tours.firebasestorage.app",
  messagingSenderId: "810782963833",
  appId: "1:810782963833:web:6f4ddb46bd4c990f963ca8",
  measurementId: "G-F612YH7L26"
};

const app = initializeApp(firebaseConfig);

// 🔐 Login system
export const auth = getAuth(app);

// 📊 Analytics (اختياري)
export const analytics = getAnalytics(app);