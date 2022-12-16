// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA37A2kuw9-8e9dipVJFpvlsyi4Zf5HqqM",
  authDomain: "ntut-web-by-108590049-001.firebaseapp.com",
  databaseURL: "https://ntut-web-by-108590049-001-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "ntut-web-by-108590049-001",
  storageBucket: "ntut-web-by-108590049-001.appspot.com",
  messagingSenderId: "620596318925",
  appId: "1:620596318925:web:3e1be1f425bca058bfcf84",
  measurementId: "G-4Y6MFV8C72"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const database = getDatabase(app);