// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBCnJX-uZB17pZ8HM-7fgZ5ag1JXrsfgEA",
  authDomain: "coffee-store-web25.firebaseapp.com",
  projectId: "coffee-store-web25",
  storageBucket: "coffee-store-web25.firebasestorage.app",
  messagingSenderId: "1092643131961",
  appId: "1:1092643131961:web:1129f8c9f830e520dd73e8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;