<script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyCq1FWz6Jprping2rdePCs4MsnDtRnf20Q",
    authDomain: "alumina-kijing.firebaseapp.com",
    projectId: "alumina-kijing",
    storageBucket: "alumina-kijing.firebasestorage.app",
    messagingSenderId: "1039812060235",
    appId: "1:1039812060235:web:4017fdf554663815fc59ce",
    measurementId: "G-RC8MVBDTD1"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
</script>
