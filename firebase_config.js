// firebase_config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.6.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyCqlFMZ6Jprping2rdePGs4MsnDtRnf200",
    authDomain: "alumina-kijing.firebaseapp.com",
    projectId: "alumina-kijing",
    storageBucket: "alumina-kijing.firebasestorage.app",
    messagingSenderId: "1039812060235",
    appId: "1:1039812060235:web:4017fdf554663815fc59ce"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
