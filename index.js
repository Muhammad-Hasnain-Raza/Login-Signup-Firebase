  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
  import { getAuth,GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDyqxLMSaBL0OyxSZh2QXukCcjnUsqAR1k",
    authDomain: "first-one-ae931.firebaseapp.com",
    projectId: "first-one-ae931",
    storageBucket: "first-one-ae931.appspot.com",
    messagingSenderId: "1063020577492",
    appId: "1:1063020577492:web:63772490c7dd9ad7723141",
    measurementId: "G-DCQGDLX95C"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

  const auth = getAuth(app);
  auth.languageCode = 'en';

  const provider = new GoogleAuthProvider();
